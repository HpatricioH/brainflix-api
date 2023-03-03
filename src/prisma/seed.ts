import { videos } from './DB Data/videos'
import { comments } from './DB Data/comments'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Video = {
  id: string
  title: string
  channel: string
  image: string
  description: string
  views: string
  likes: string
  duration: string
  video: string
  timestamp: number
}

type Comment = {
  id: string
  video_id: string
  name: string
  comment: string
  likes: number
  timestamp: number
}

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
          timestamp: new Date(video.timestamp)
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
          timestamp: new Date(comment.timestamp)
        }
      })
    }
    ))
}

seed()

function getVideos (): Array<Video> {
  return videos
}

function getComments (): Array<Comment> {
  return comments
}
