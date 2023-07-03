export function standardDeviation(values: number[]) {
  const avg = average(values)
  const squareDiffs = values.map(function (value) {
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

interface Commit {
  branch: string
  created_on: string
  repo_name: string
}

interface Email {
  Commit: Commit[]
}

interface Student {
  name: string
  Emails: Email[]
}

type PivotOn = 'repo_name' | 'created_on'

export function createPivotTable(students: Student[], pivotOn: PivotOn) {
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
