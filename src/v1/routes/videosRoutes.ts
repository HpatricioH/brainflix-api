import express from 'express'

import * as VideoController from '../../controllers/videoController'

export const videoRouter = express.Router()

videoRouter.get('/', VideoController.getVideos)
videoRouter.get('/:id', VideoController.getSingleVideo)
videoRouter.put('/:id/likes', VideoController.likeVideo)
videoRouter.post('/:id/comments', VideoController.createComment)
videoRouter.put('/:id/comments/:commentId/likes', VideoController.likeComment)
videoRouter.delete('/:id/comments/:commentId', VideoController.deleteComment)
