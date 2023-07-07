import type { PrismaClient, Prisma } from '@prisma/client'
import { faker } from '@faker-js/faker'

type Commit = Prisma.CommitGetPayload<{
  select: {
    username: true
    branch: true
    created_on: true
    repo_name: true
    Student: { select: { name: true; username: true; github_id: true } }
  }
}>

function generateFakeRepos() {
  // will use the company name to generate 20 fake repo name
  faker.seed(123)
  const repos = Array.from({ length: 3 }, () => faker.company.name())
  return repos
}

function getFakeData(): Commit[] {
  let commits: Commit[] = []

  const fakeRepos = generateFakeRepos()
  faker.seed(123)
  for (let i = 0; i < 10; i++) {
    // create a random number
    const randomGitHubId = Math.floor(Math.random() * 100)

    const student = {
      name: faker.person.firstName(),
      username: faker.internet.userName(),
      github_id: randomGitHubId
    }

    const randomBetween1And10 = Math.floor(Math.random() * 10) + 1
    const studentCommits = Array.from({ length: randomBetween1And10 }, () => ({
      username: faker.person.firstName(),
      branch: faker.git.branch(),
      created_on: faker.date.past(),
      repo_name: faker.helpers.arrayElement(fakeRepos),
      Student: student
    }))

    commits.push(...studentCommits)
    faker.seed(randomGitHubId)
  }

  return commits
}

export async function getCommits(prisma: PrismaClient) {
  if (process.env.NODE_ENV === 'development') {
    return getFakeData()
  }
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
