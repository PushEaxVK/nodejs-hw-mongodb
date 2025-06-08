# 📇 nodejs-hw-mongodb

**Minimal backend API for managing contacts using MongoDB and Mongoose.**

This project is built with Express and connected to a MongoDB database, allowing you to retrieve contact information via REST API.

> 🧪 Source code is on branch: `hw2-mongodb`

---

## 📦 Tech Stack

- **[Node.js](https://nodejs.org/)** – JavaScript runtime
- **[Express 5](https://expressjs.com/)** – Web framework for building APIs
- **MongoDB + Mongoose** – NoSQL database with ODM
- **[pino-http](https://github.com/pinojs/pino-http)** – HTTP logging middleware
- **[cors](https://www.npmjs.com/package/cors)** – Enables CORS for cross-origin requests
- **[dotenv](https://www.npmjs.com/package/dotenv)** – Loads environment variables

## 🗂️ Project Structure

```
nodejs-hw-mongodb/
├── src/
│   ├── db/
│   │   ├── models/
│   │   │   └── contacts.js        # Mongoose schema for contacts
│   │   └── initMongoConnection.js # MongoDB connection initializer
│   ├── services/
│   │   └── contacts.js            # Business logic for contacts
│   ├── utils/
│   │   └── getEnvVar.js           # Utility to safely access env vars
│   ├── index.js                   # Entry point
│   └── server.js                  # Express app and routes
├── .env                           # Local environment configuration
├── .env.example                   # Example env config
├── .editorconfig                  # Editor formatting rules
├── .gitignore                     # Git ignored files
├── .prettierrc                    # Prettier config
├── eslint.config.mjs              # ESLint configuration
├── package.json                   # Project dependencies and scripts
└── README.md                      # This file
```

---

## 🌱 Environment Configuration

Create a `.env` file in the root based on `.env.example`:

```
PORT=3000
MONGODB_USER=your_username
MONGODB_PASSWORD=your_password
MONGODB_URL=your_mongodb_cluster
MONGODB_DB=your_database_name
```

The full MongoDB URI will be composed in code using these variables.

## 🚀 Available Endpoints

### `GET /`

Health check:

```json
{ "message": "Hello World!" }
```

### `GET /contacts`

Returns all contacts.

### `GET /contacts/:contactId`

Returns a contact by ID.
Responds with `404` if the contact is not found or the ID is invalid.

## ⚙️ Usage

```bash
# Clone the project
git clone https://github.com/PushEaxVK/nodejs-hw-mongodb.git
cd nodejs-hw-mongodb

# Checkout correct branch
git checkout hw2-mongodb

# Install dependencies
npm install

# Create environment config
cp .env.example .env
# Edit .env with your MongoDB credentials

# Run the app in development mode
npm run dev

# Run the app in production mode
npm start
```

## 🧪 Scripts

| Script         | Description                               |
| -------------- | ----------------------------------------- |
| `npm run dev`  | Start app with auto-reloading (`nodemon`) |
| `npm start`    | Start app normally with Node.js           |
| `npm run lint` | Run ESLint checks                         |

## 🧑‍💻 Author

Created by [PushEax](https://github.com/PushEaxVK)

## 📝 License

Licensed under the ISC License.
