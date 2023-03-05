import { Request, Response } from 'express'
import * as VideoService from '../services/video.services'

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await VideoService.getVideos()
    return res.status(200).json(videos)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const getSingleVideo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const singleVideo = await VideoService.getSingleVideo(id.toString())
    return res.status(200).json(singleVideo)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const likeVideo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const videoLiked = await VideoService.likeVideo(id.toString())
    res.status(200).json(videoLiked)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
