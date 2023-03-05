import express from 'express'

import * as VideoController from '../../controllers/videoController'

export const videoRouter = express.Router()

videoRouter.get('/', VideoController.getVideos)
