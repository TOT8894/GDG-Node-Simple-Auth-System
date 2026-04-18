# 🚀 Authentication & User Management API

A secure and scalable RESTful API built with **Node.js**, **Express**, and **MongoDB** that handles authentication, authorization, and user management using JWT (Access & Refresh Tokens).

---

## 📌 Features

- 🔐 User Authentication (Sign Up / Sign In / Sign Out)
- ♻️ Refresh Token System
- 🍪 Secure HTTP-only Cookies
- 🔑 Role-Based Authorization (Admin/User)
- 🧂 Password Hashing with bcrypt
- 🛡️ JWT with RSA (Public/Private Keys)
- 🚫 Account Lock after multiple failed attempts
- ✅ Input Validation using Joi
- 📦 Clean MVC Architecture

---

## 🏗️ Project Structure

```
├── config/
│   └── mongodb.js
├── controller/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   ├── authentication.js
│   ├── autherization.js
│   └── userMiddleware.js
├── models/
│   ├── userModel.js
│   └── refreshTokenModel.js
├── routes/
│   ├── authRoute.js
│   └── userRoute.js
├── errorHandler/
│   └── errorHandler.js
├── app.js
├── server.js
└── .env
```

---

## ⚙️ Installation

```bash
git clone https://github.com/TOT8894/GDG-Node-Simple-Auth-System.git
cd GDG-Node-Simple-Auth-System
npm install
npm run dev
```

---

## 📡 Authentication Routes

| Method | Endpoint                   | Description                   | Auth |
| ------ | -------------------------- | ----------------------------- | ---- |
| POST   | /api/v1/auth/sign-up       | Create a new user account     | ❌   |
| POST   | /api/v1/auth/sign-in       | Authenticate & get tokens     | ❌   |
| POST   | /api/v1/auth/sign-out      | Log out and clear tokens      | ✅   |
| POST   | /api/v1/auth/refresh-token | Obtain a new access token     | ❌   |
| GET    | /api/v1/auth/user          | Retrieve current user profile | ✅   |

---

## 👤 User Routes (Admin Only)

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| POST   | /api/v1/user/    | Manually create a new user      |
| GET    | /api/v1/user/    | Get a list of all users         |
| GET    | /api/v1/user/:id | Get details for a specific user |
| PUT    | /api/v1/user/:id | Update user information         |
| DELETE | /api/v1/user/:id | Remove a user from the system   |

---
