![Screenshot (230)](https://github.com/user-attachments/assets/6a277b43-369b-4e2b-b8a4-0b638d1103d8)

# Student Team Management Application
A full-stack web application for managing team members, built with React.js, Node.js, Express, and MongoDB.

## Team Members
<ul>
   <l>Annu Mishra [ RA2211056010073]</l>
   <l>Sahil Waghmare [RA2211056010120]</l>
   <l>Komal Verma [RA2211056010140]</l>
</ul>

## Features

- Add new team members with profile images
- View all team members in a grid layout
- View detailed information about each team member
- Responsive design using Material-UI
- Image upload functionality
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create an `uploads` directory in the root folder:
   ```bash
   mkdir uploads
   ```

5. Start MongoDB service on your machine

## Running the Application

1. Start the backend server (from the root directory):
   ```bash
   npm run dev
   ```

2. Start the frontend development server (from the client directory):
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/members` - Get all team members
- `GET /api/members/:id` - Get a specific team member
- `POST /api/members` - Add a new team member

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Multer (for file uploads)

## Project Structure

```
StudTeamApp/
├── sta/                 # React frontend
│   ├── src/
│   │   ├── screen/         # Page components
│   │   └── App.js         # Main App component
└── package.json          # Backend dependencies
``` 

## Project Overview/ Outcome:
![Screenshot (231)](https://github.com/user-attachments/assets/af3b1743-ef0f-44f4-9903-cece89922d9d)

![Screenshot (232)](https://github.com/user-attachments/assets/b5f30f1e-b766-49db-ad68-2e793a93482d)

