import pkg from '@prisma/client'
const { PrismaClient } = pkg

export async function load() {
  const prisma = new PrismaClient()
  const students = await prisma.student.findMany({
    select: {
      name: true,
      Emails: {
        select: {
          Commit: {
            select: {
              branch: true,
              created_on: true,
              repo_name: true
            }
          }
        }
      }
    }
  })

  return {
    students
  }
}
