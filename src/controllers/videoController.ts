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
