import { videos } from './DB Data/videos'
import { comments } from './DB Data/comments'
import { PrismaClient } from '@prisma/client'
// import { Video, Comment } from '../utils/models'

const prisma = new PrismaClient()

async function seed () {
  await Promise.all(
    getVideos().map((video) => {
      return prisma.videos.create({
        data: {
          id: video.id,
          title: video.title,
          channel: video.channel,
          image: video.image,
          description: video.description,
          views: video.views,
          likes: video.likes,
          duration: video.duration,
          video: video.video,
          timestamp: video.timestamp
        }
      })
    })
  )

  await Promise.all(
    getComments().map((comment) => {
      return prisma.comments.create({
        data: {
          id: comment.id,
          video_id: comment.video_id,
          name: comment.name,
          comment: comment.comment,
          likes: comment.likes,
          timestamp: comment.timestamp
        }
      })
    }
    ))
}

seed()

function getVideos () {
  return videos
}

function getComments () {
  return comments
}
