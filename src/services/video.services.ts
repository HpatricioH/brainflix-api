import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// GEt all videos with comments
export const getVideos = async () => {
  return await prisma.videos.findMany({
    include: {
      comments: true
    }
  })
}

// Get a single video with comments
export const getSingleVideo = async (id: string) => {
  return await prisma.videos.findMany({
    where: {
      id
    },
    include: {
      comments: true
    }
  })
}

// like a video by id
export const likeVideo = async (id: string) => {
  return await prisma.videos.update({
    where: {
      id
    },
    data: { likes: { increment: 1 } }
  })
}
