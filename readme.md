# Video App Backend API
This is the backend API for a video sharing app that allows users to view, like, and comment on videos.

## Getting Started
To get started, you'll need to have Node.js installed on your machine. You can download Node.js from the official website: https://nodejs.org/en/

After installing Node.js, clone the repository and install the dependencies:

git clone https://github.com/HpatricioH/brainflix-api.git
cd video-sharing-app-backend
npm install

## To start the server, run the following command:
npm run start 
The server will start listening on http://localhost:8080.

## API Endpoints
This backend API provides the following endpoints for accessing and manipulating video data:

  * GET /videos: Fetches all videos.
  * GET /videos/:id: Fetches a single video by ID.
  * POST /videos/:id/like: Likes a video by ID.
  * POST /videos/:id/comments: Creates a new comment for a video.
  * POST /videos/:id/comments/:commentId/like: Likes a comment by ID.
  * DELETE /videos/:id/comments/:commentId: Deletes a comment by ID.
  * Refer to the API documentation for more details on each endpoint.

### Testing
To run the tests, use the following command:

npx playwright "name of repo"
The tests use playwright framework to test the API endpoints and service functions.
