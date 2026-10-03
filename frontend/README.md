# Workout buddy

A mern-stack workout log for recording exercises with their load and repetition count. The React interface lists workouts, adds new entries, and deletes them. The Express API stores workout records in MongoDB.

## Project structure

```text
.
├── Backend/
│   ├── controllers/       # Workout request handlers
│   ├── models/            # Mongoose workout schema
│   ├── routes/            # Workout API routes
│   ├── server.js          # Express app and MongoDB connection
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/    # Navigation, workout form, workout cards
    │   ├── context/       # Shared workout state
    │   ├── hooks/
    │   └── pages/
    └── package.json
```

## Requirements

- Node.js and npm
- A MongoDB instance and connection URI

## Configuration

Create `Backend/.env` with the following variables:

```env
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/workouts
```

Replace the MongoDB URI with the connection string for your database. Keep `.env` private and do not commit real credentials.

## Run locally

Install and start the backend in one terminal:

```bash
cd Backend
npm install
npm start
```

The server connects to MongoDB before it starts listening on the configured `PORT`.

Install and start the frontend in another terminal:

```bash
cd frontend
npm install
npm start
```

The frontend development server opens the React app, typically at `http://localhost:3000`.

### Local API connection

The frontend's workout list, create, and delete requests currently use the hosted API URL `https://task35-7vou.onrender.com/api/workouts`. Although `frontend/package.json` defines a proxy to `http://localhost:4000`, the current source uses absolute hosted URLs, so the proxy does not redirect these requests to your local backend. To use the local backend, change those request URLs in `frontend/src/pages/Home.js`, `frontend/src/components/WorkoutForm.js`, and `frontend/src/components/WorkoutDetails.js` to `http://localhost:4000/api/workouts` (with the workout ID appended for delete).

## API

Base path: `/api/workouts`

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/workouts` | List workouts, newest first |
| `GET` | `/api/workouts/:id` | Get a workout by MongoDB ID |
| `POST` | `/api/workouts` | Create a workout |
| `PATCH` | `/api/workouts/:id` | Update a workout |
| `DELETE` | `/api/workouts/:id` | Delete a workout |

Example create request:

```json
{
  "title": "Squat",
  "load": 80,
  "reps": 8
}
```

The create endpoint requires `title`, `load`, and `reps`. Records are stored with `loads` as the database field for the submitted `load`, and MongoDB timestamps are added automatically.

- created by shivensinh parmar