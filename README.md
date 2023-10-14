# Fullstack Quiz Application (MERN Stack)

## Overview

This is a fullstack quiz application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to take quizzes on various topics, view their quiz history, and manage their account.

## Features

- **Quiz Taking:** Users can take quizzes on different topics. Questions are presented one at a time, and users can navigate through them. The application provides immediate feedback on correct and incorrect answers.

- **Quiz History:** Users can view their quiz history, including past quiz scores and details of each attempt.

- **Admin Panel:** An admin panel is available for managing quizzes. Admins can add, edit, and delete quiz questions and topics.

- **Responsive Design:** The application is designed to work on various devices, providing a seamless experience on both desktop and mobile.

## Technologies Used

- **Frontend:** React.js, Redux for state management, Bootstrap for styling.

- **Backend:** Node.js, Express.js for API development.

- **Database:** MongoDB for storing user information, quiz data, and quiz results.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fullstack-quiz-app.git
   cd fullstack-quiz-app
   ```

2. Install dependencies:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `backend` directory and add the following:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

     Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT.

4. Start the application:

   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend development server
   cd ../frontend
   npm start
   ```

   The application should now be running. Access it at [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

If you'd like to contribute to the development of this application, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork: `git push origin feature-name`.
- Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the MERN stack and the open-source community for providing the tools and resources to build this application.

Feel free to customize this readme file based on your specific project details and requirements.
