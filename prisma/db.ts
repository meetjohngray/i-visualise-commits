import type { PrismaClient } from '@prisma/client'

export async function getCommits(prisma: PrismaClient) {
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

  return commits
}
