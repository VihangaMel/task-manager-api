# Task Manager APT

A simple RESTful API for managing tasks, built with **Node.js**, **Express**, and **MongoDB**.

## Installation

Install my-project with npm

```bash
  npm install
  cd my-project
```

## ✨ Features

- Create, read, update, and delete tasks
- Mark tasks as completed
- Frontend interface for interacting with the API
- Error handling and async middleware

## 🛠 Technologies

- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **Axios** (frontend)
- **HTML / CSS / JavaScript**

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB setup)

### 📥 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/vihangamel/task-manager-api.git
   cd task-manager-api

   ```

2. Install dependencies:

```sh
npm install
```

3. Create a .env file in the root directory and add your MongoDB URI:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### ▶️ Running the App

Start the server:

```sh
npm start
```

The API will be available at:
👉 http://localhost:3000/api/v1/tasks

## 📡 API Endpoints

### API Reference

| Method   | Endpoint            | Description       |
| :------- | :------------------ | :---------------- |
| `GET`    | `/api/v1/tasks`     | Get all tasks     |
| `POST`   | `/api/v1/tasks`     | Create a new task |
| `GET`    | `/api/v1/tasks/:id` | Get a single task |
| `PATCH`  | `/api/v1/tasks/:id` | Update a task     |
| `DELETE` | `/api/v1/tasks/:id` | Delete a task     |

## 📜 License

This project is licensed under the ISC License.
Feel free to edit and expand this project as needed. 🚀
