import pkg from '@prisma/client'
const { PrismaClient } = pkg

export async function load() {
  const prisma = new PrismaClient()
  const commits = await prisma.commit.findMany({
    select: {
      id: true,
      created_on: true,
      email: true,
      repo_name: true,
      branch: true,
      Email: {
        select: {
          name: true,
          email: true
        }
      },
      Repo: {
        select: {
          forked_date: true,
          name: true
        }
      }
    },
    orderBy: {
      created_on: 'desc'
    }
  })

  const students = await prisma.student.findMany({
    include: {
      Emails: {
        include: {
          Commit: {
            orderBy: {
              created_on: 'desc'
            }
          }
        }
      }
    }
  })

  return {
    students,
    streamed: {
      commits
    }
  }
}
