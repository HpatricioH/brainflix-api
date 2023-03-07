import { PrismaClient } from '@prisma/client'
import { uuid } from 'uuidv4'
const prisma = new PrismaClient()

// Get all videos with comments
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

// create a comment on a video by id
export const createComment = async (id:string, comment: string, name: string, timestamp: string) => {
  return await prisma.comments.create({
    data: {
      id: uuid(),
      video_id: id,
      comment,
      name,
      timestamp,
      likes: 0
    }
  })
}

// like a video comment by id
export const likeComment = async (id: string, commentId: string) => {
  return await prisma.videos.update({
    where: {
      id
    },
    data: {
      comments: {
        update: {
          where: { id: commentId },
          data: { likes: { increment: 1 } }
        }
      }
    },
    include: {
      comments: true
    }
  })
}

// delete a video comment
export const deleteComment = async (id: string, commentId: string) => {
  return await prisma.videos.update({
    where: {
      id
    },
    data: {
      comments: {
        deleteMany: { id: commentId }
      }
    }
  })
}
