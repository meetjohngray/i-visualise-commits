import pkg from '@prisma/client'
const { PrismaClient } = pkg

export async function load() {
  const prisma = new PrismaClient()

  const commits = await prisma.commit.findMany({
    select: {
      branch: true,
      created_on: true,
      repo_name: true,
      Email: {
        select: {
          email: true,
          Student: {
            select: {
              name: true
            }
          }
        }
      }
    },
    orderBy: {
      created_on: 'desc'
    }
  })

  const studentMap = new Map<string, any>()

  commits.forEach((commit) => {
    if (!commit.Email.Student) {
      return
    }
    const studentName = commit.Email.Student.name
    const email = commit.Email.email
    const student = studentMap.get(studentName)

    if (student) {
      const emailObj = student.Emails.find((e: any) => e.email === email)

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

  // Convert the Map to a plain array of student objects.
  const students = Array.from(studentMap.values())

  console.log(students)

  return {
    students
  }
}
