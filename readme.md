# MERN Authentication Project

This project implements a basic authentication system using JSON Web Tokens (JWT). The stack includes a React.js frontend for the user interface and a Node.js backend for the API.

![Project Image](<images/Screenshot (1372).png>)
![Project Image](<images/Screenshot (1373).png>)


## Features

- **User Authentication:** Allows users to sign up and log in securely using JWT.
- **Error Handling:** Displays meaningful error messages, including cases where a user tries to register with an existing email.
- **Tech Stack:** Utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js).
- **Deployed Link:** [MERN Authentication App](https://brand-wick-assignment-client.vercel.app/)

## Screenshots

<!-- Add screenshots or images of your application -->

## Installation

### Frontend (React.js)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React.js app:

   ```bash
   npm start
   ```

### Backend (Node.js)

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Node.js server:

   ```bash
   npm start
   ```

## API Endpoints

- **Sign Up:** `POST /api/register`
  - Parameters: `name`, `username`, `email`, `confirm password`, `password`
  - Successful Response: User details and a JWT token.

- **Sign In:** `POST /api/signin`
  - Parameters: `email`, `password`
  - Successful Response: User details and a JWT token.

  - **Sign In:** `POST /api/logout`
  

## Deployment

The project is deployed on Vercel. Visit the [deployed link](https://brand-wick-assignment-client.vercel.app/) to explore the application.


## License

This project is licensed under the [MIT License](LICENSE).

---

*This project was created as part of an assignment. For more information, contact [+91 7006822034].*