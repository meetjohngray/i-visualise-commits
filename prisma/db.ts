import type { PrismaClient } from '@prisma/client'

export async function getCommits(prisma: PrismaClient) {
  const commits = await prisma.commit.findMany({
    select: {
      username: true,
      branch: true,
      created_on: true,
      repo_name: true,
      Student: {
        select: {
          name: true,
          username: true,
          github_id: true
        }
      }
    },
    orderBy: {
      created_on: 'desc'
    }
  })

  return commits
}
