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

export const createComment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const { comment, name, timestamp } = req.body

    if (!comment || !name || !timestamp) {
      return res.status(400).json({ message: 'Please provide all fields' })
    } else {
      const newComment = await VideoService.createComment(id.toString(), comment, name, timestamp)
      return res.status(201).json(newComment)
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const likeComment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const commentId = req.params.commentId

    if (!commentId || !id) {
      return res.status(400).json({ message: 'Invalid Id' })
    } else {
      const commentLiked = await VideoService.likeComment(id.toString(), commentId)
      return res.status(200).json(commentLiked)
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const commentId = req.params.commentId

    await VideoService.deleteComment(id.toString(), commentId)
    return res.status(200).json({ message: 'Comment deleted' })
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
