# Assignment-Submission-Portal-

## Introduction
The Assignment Submission Portal is a backend application that enables users to submit assignments and allows admins to manage these submissions. The system supports user registration, assignment uploads, and admin functionalities for accepting or rejecting assignments.

## Technologies Used
- **Node.js**: Runtime environment for executing JavaScript on the server-side.
- **Express.js**: Web application framework for Node.js to build APIs.
- **MongoDB**: NoSQL database for storing user and assignment data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Postman**: For API testing.

## Installation
To set up the project locally, follow these steps:

 **Clone the Repository**
   bash
   
   git clone https://github.com/PrasanBora/Assignment-Submission-Portal-.git
   
   cd assignment-submission-portal

**Install Dependencies Make sure you have Node.js and npm installed**

 npm install

Set Up MongoDB Make sure you have MongoDB installed and running 
You can use MongoDB Atlas for a cloud-based solution. 



Update the connection string in the .env file.

Create a .env File Create a .env file in the root directory and add the following
MONGODB_URI=
JWT_SECRET=


# Testing with Postman
You can use Postman to test the API endpoints. Here’s how to do it:

Create a New Request: Use the POST, GET methods as required.

Set the URL: Use the appropriate URL as mentioned in the API Endpoints section.

Set the Body: Provide the required JSON in the request body for POST requests.

Add Authorization: For protected routes, include the JWT token in the Authorization header as Bearer <your_token>.

View Responses: Check the status and response body to ensure the API works as expected.d.
