import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getVideos = async () => {
  return await prisma.videos.findMany({
    include: {
      comments: true
    }
  })
}
