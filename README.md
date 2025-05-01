Team Management Application
![Screenshot (230)](https://github.com/user-attachments/assets/7e6dc145-845c-435a-a47a-a63231f59d3f)

A full-stack web application for managing team members, built with React.js, Node.js, Express, and MongoDB.

Team Members
Annu Mishra[RA2211056010073] Sahil Waghmare [RA2211056010120] Komal Verma[RA2211056010140]

Features
Add new team members with profile images
View all team members in a grid layout
View detailed information about each team member
Responsive design using Material-UI
Image upload functionality
RESTful API endpoints

Prerequisites
Node.js (v14 or higher)
MongoDB
npm or yarn
Setup Instructions
Clone the repository

Install backend dependencies:

npm install
Install frontend dependencies:

cd client
npm install
Create an uploads directory in the root folder:

mkdir uploads
Start MongoDB service on your machine

Running the Application
Start the backend server (from the root directory):

npm run dev
Start the frontend development server (from the client directory):

cd client
npm start
Open your browser and navigate to http://localhost:3000

API Endpoints
GET /api/members - Get all team members
GET /api/members/:id - Get a specific team member
POST /api/members - Add a new team member
Technologies Used
Frontend:

React.js
Material-UI
React Router
Axios
Backend:

Node.js
Express
MongoDB
Multer (for file uploads) 
Project Overview/ Outcome:
![Screenshot (231)](https://github.com/user-attachments/assets/94d38f67-0a66-4465-b895-9c720d29af0a)

![Screenshot (232)](https://github.com/user-attachments/assets/827d726e-ca49-4bdb-b7be-9e92f46efce0)

