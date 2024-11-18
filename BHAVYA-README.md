# VaultX REST API 

## Assignment Overview
This assignment focuses on building a REST API using Node.js and the Express framework, with MongoDB Atlas as the database for persistence. The goal of this assignment is to learn about Node.js, REST API development, and handling HTTP requests with the Express framework, while leveraging MongoDB Atlas for storing data.

## Technical Requirements
- Node.js and Express.js for building the API.
- MongoDB Atlas for database persistence.
- A fully functional set of REST APIs to handle user coin data.

## Inclusions
- Code documentation
- .gitignore, README.md, and multiple Git commits
- Correct usage of HTTP request methods.
- Controller, services, routers and model layers are implemented.
- REST APIs should be fully functional.

## Requirements
- Node.js (version 20.0)
- MongoDB Atlas account
- Bruno

## Project Setup and Implementation Steps

## 1. Create MongoDB Atlas Project
   - Created a new project in [MongoDB Atlas](https://cloud.mongodb.com/).
   - Created a new cluster in MongoDB Atlas.

## 2. Connect to MongoDB Atlas
   - Retrieved the connection string from MongoDB Atlas and added it to **MongoDB Compass**.
   - `mongodb+srv://bukkab:<db_password>@cluster0.n786j.mongodb.net/`

## 3. Set Up `.env` File
- Created a `.env` file to store sensitive information such as the port number and MongoDB connection URL
- `PORT=3002`
- `MONGO_URI=mongodb+srv://bukkab:<db_password>@cluster0.n786j.mongodb.net/VaultX?retryWrites=true&w=majority&appName=Cluster0`

## 4. Set Up Project Structure
- Created a separate branch named **"Bhavya"** to manage the feature development.

## 5. Created Project Layers
- Created the following layers to organize the code:
  - **models**: Mongoose models for user and coin data.
  - **controllers**: Logic for handling the API requests.
  - **services**: Functions to interact with the database.
  - **routers**: API routes to handle user and coin endpoints.
- Created a **server.js** file to set up the Express server.

## 6. Installed Dependencies
- Initialized the project with npm:
  ```bash
  npm init
  ```

- Installed the required dependencies:
  ```bash
  npm i -s express debug dotenv cors mongoose
  ```

## 7. Server Setup
- In **server.js**, I set up the Express server with middleware for handling requests and connecting to MongoDB using the URL from the `.env` file.

- Added the following script to the `package.json` to start the server:

  ```json
  "scripts": {
    "start": "node server.js"
  }
  ```
## 8. Running the Server
- Started the server using the following command:

  ```bash
  npm run start
  ```
## 9. API Implementation
- Created RESTful APIs for adding and retrieving coins for a user.
- Implemented proper HTTP methods (POST for adding coins, GET for retrieving coins).

This README provides a simple and clear breakdown of the steps I followed to build and run the project.

## Folder Structure
```
final-project-random/
├── bhavya-screenshots/
├── bhavya-api/
│   ├── docs/
│   │   ├── bhavya-api-specification/
│   │   │   ├── user.yml
│   │   │   └── coin-tracker.yml
│   │   └── bruno/
│   ├── service/
│   │   ├── controllers/
│   │   │   ├── coin-controller.js
│   │   │   ├── response-handler.js
│   │   │   └── user-controller.js
│   │   ├── models/
│   │   │   ├── coin.js
│   │   │   └── user.js
│   │   ├── routers/
│   │   │   ├── coin-routers.js
│   │   │   └── user-routers.js
│   │   └── services/
│   │       ├── app.js
│   │       ├── coin-services.js
│   │       └── user-service.js
│   ├── .gitignore
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── README.md
```
## Functionality Overview:

### User-related routes:
- **Sign Up (POST /signup)**: The user signs up with their email, name, and password. This email will be the unique identifier for the user.
- **Login (POST /login)**: The user can log in with the email and password, which authenticates their session.
- **Get All Users (GET /users)**
- **Update User Information (PUT /users/email)**
- **Get User by Email (GET /users/email)**
- **Delete User (DELETE /users/email)**

### Coin-related routes:
- **Add Coin (POST /coins)**: This allows the user to add a new coin.
- **Get All Coins (GET /coins)**: Retrieves a list of all available coins.
- **Get Coin Details (GET /coins/name)**: Retrieves details of a specific coin.
- **Add Coin to User's Tracker (POST /users/email/coins)**: Adds a coin to the user's tracker using their email.
- **Get User's Coin Tracker (GET /users/email/coins)**: Retrieves the list of coins in the user's tracker.
- **Edit User's Coin (PUT /users/email/coins/name)**: Allows the user to edit a specific coin in their tracker.
- **Delete Coin from User's Tracker (DELETE /users/email/coins/name)**: Removes a specific coin from the user's tracker.
