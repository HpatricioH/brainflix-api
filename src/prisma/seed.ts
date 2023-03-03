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

async function seed() {
  await  prisma.videos.createMany({
}

function getVideos(): Array<Video> {
  return videos
}

function getComments(): Array<Comment> {
  return comments
}

async function main () {
  for (const video of videos) {
    await prisma.videos.create({
      data: video
    })
  }

  for (const comment of comments) {
    await prisma.comments.create({
      data: comment
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
