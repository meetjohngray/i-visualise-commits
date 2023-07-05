import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const org = process.env.GITHUB_ORG
  if (!org) {
    throw new Error('GITHUB_ORG is not set in .env file')
  }

  const members = await fetchMembers(org)
  for (const { login, databaseId, email } of members) {
    const username = login
    const github_id = databaseId
    console.log(`👋 ${username} ${databaseId} (${email})`)
    await prisma.student.upsert({
      where: { github_id: github_id },
      update: {},
      create: {
        username,
        name: username,
        github_id,
        is_student: true
      }
    })
  }
}

interface Member {
  data: {
    organization: {
      membersWithRole: {
        edges: {
          node: {
            databaseId: number
            login: string
            email: string
          }
          role: string
        }[]
      }
    }
  }
}

// fetch a GraphQL API for all members of the organization
async function fetchMembers(org: string) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `
{
  organization(login: "${org}") {
    membersWithRole(first: 100) {
      edges {
        node {
          databaseId
          login
          email
        }
        role
      }
    }
  }
}`
    })
  })

  const data = (await response.json()) as Member
  const members = data.data.organization.membersWithRole.edges
    .filter((edge) => edge.role === 'MEMBER')
    .map((edge) => edge.node)
  console.log(members)

  return members
}

main()
