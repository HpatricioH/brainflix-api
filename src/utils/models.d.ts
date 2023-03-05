export type Video = {
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

export type Comment = {
  id: string
  video_id: string
  name: string
  comment: string
  likes: number
  timestamp: string
}
