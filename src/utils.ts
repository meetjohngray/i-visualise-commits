import type { getCommits } from '../prisma/db'
import type { StudentData } from './routes/+page.server'

export function standardDeviation(values: number[]) {
  const avg = average(values)
  const squareDiffs = values.map(function(value) {
    const diff = value - avg
    const sqrDiff = diff * diff
    return sqrDiff
  })

  const avgSquareDiff = average(squareDiffs)
  const stdDev = Math.sqrt(avgSquareDiff)
  return stdDev
}

function average(data: number[]) {
  const sum = data.reduce((sum, value) => sum + value, 0)
  const avg = sum / data.length
  return avg
}

type PivotOn = 'repo_name' | 'created_on'

export function createPivotTable(students: StudentData[], pivotOn: PivotOn) {
  const pivotTable: { [key: string]: { [key: string]: number } } = {}

  students.forEach((student) => {
    student.Emails.forEach((email) => {
      email.Commit.forEach((commit) => {
        const pivotKey =
          pivotOn === 'created_on'
            ? new Date(commit[pivotOn]).toISOString().split('T')[0]
            : commit[pivotOn]

        if (!pivotTable[pivotKey]) {
          pivotTable[pivotKey] = {}
        }

        if (!pivotTable[pivotKey][student.name]) {
          pivotTable[pivotKey][student.name] = 0
        }

        pivotTable[pivotKey][student.name]++
      })
    })
  })

  return pivotTable
}

export function flip(commits: Awaited<ReturnType<typeof getCommits>>) {
  const studentMap = new Map<string, StudentData>()

  commits.forEach((commit) => {
    if (!commit.Email.Student) return
    const studentName = commit.Email.Student.name
    const email = commit.Email.email
    const student = studentMap.get(studentName)

    if (student) {
      const emailObj = student.Emails.find((e) => e.email === email)

      if (emailObj) {
        emailObj.Commit.push({
          branch: commit.branch,
          created_on: commit.created_on,
          repo_name: commit.repo_name
        })
      } else {
        student.Emails.push({
          email: email,
          Commit: [
            {
              branch: commit.branch,
              created_on: commit.created_on,
              repo_name: commit.repo_name
            }
          ]
        })
      }
    } else {
      studentMap.set(studentName, {
        name: studentName,
        Emails: [
          {
            email: email,
            Commit: [
              {
                branch: commit.branch,
                created_on: commit.created_on,
                repo_name: commit.repo_name
              }
            ]
          }
        ]
      })
    }
  })

  const students = Array.from(studentMap.values())
  return students
}
