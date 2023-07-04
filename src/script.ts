import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for (const commit of push.commits) {
    await prisma.email.upsert({
      where: {
        email: commit.author.email
      },
      update: {
        name: capitalizeFirstLetter(
          firstName(firstName(commit.author.name), '-')
        ),
        email: commit.author.email
      },
      create: {
        name: capitalizeFirstLetter(
          firstName(firstName(commit.author.name), '-')
        ),
        email: commit.author.email
      }
    })
  }
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function firstName(str: string, separator = ' ') {
  return str.split(separator)[0]
}

main()
