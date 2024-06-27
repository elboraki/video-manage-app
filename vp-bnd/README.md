# Video API

This is a simple API for managing a collection of videos, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/video-api.git
    cd video-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Make sure MongoDB is running on your local machine or update the connection string in the source code.

4. (Optional) Create a `.env` file to set environment variables. An example `.env` file might look like:

    ```env
    NODE_ENV=development
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your browser or API client and navigate to `http://localhost:3000`.

## API Endpoints

### Get All Videos

- **URL:** `/api/videos`
- **Method:** `GET`
- **Description:** Retrieves all videos from the database.
- **Response:**
  - `200 OK`: A list of videos.
  - `500 Internal Server Error`: Error getting videos.

### Get Video by ID

- **URL:** `/api/videos/:id`
- **Method:** `GET`
- **Description:** Retrieves a video by its ID.
- **Response:**
  - `200 OK`: The requested video.
  - `500 Internal Server Error`: Error getting video by ID.

### Create a New Video

- **URL:** `/api/videos`
- **Method:** `POST`
- **Description:** Creates a new video.
- **Request Body:**
  - `title`: String
  - `url`: String
  - `description`: String
- **Response:**
  - `200 OK`: The created video.
  - `500 Internal Server Error`: Error creating video.

### Update Video by ID

- **URL:** `/api/videos/:id`
- **Method:** `PUT`
- **Description:** Updates a video by its ID.
- **Request Body:** Partial or full video object.
- **Response:**
  - `200 OK`: The updated video.
  - `404 Not Found`: Video not found.
  - `500 Internal Server Error`: Error updating video.

### Delete Video by ID

- **URL:** `/api/videos/:id`
- **Method:** `DELETE`
- **Description:** Deletes a video by its ID.
- **Response:**
  - `200 OK`: Video deleted.
  - `404 Not Found`: Video not found.
  - `500 Internal Server Error`: Error deleting video.

## Environment Variables

The application uses environment variables to configure the application. Create a `.env` file in the root directory and add the following variables:

- `NODE_ENV`: The environment in which the application is running (e.g., `development`, `production`).
- `DB_URI`: The URI for connecting to the MongoDB database.

Example `.env` file:

```env
NODE_ENV=development
DB_URI=mongodb://localhost:27017/videos
