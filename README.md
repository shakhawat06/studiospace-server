# StudioSpace – Backend API

StudioSpace Backend is a RESTful API built with **Node.js and Express.js** to power the StudioSpace studio booking platform. It handles studio management, user-related operations, wishlist management, and studio bookings.

The API provides a structured backend service that allows the frontend application to communicate with the server, manage studio data, and handle booking-related operations.

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend framework for building RESTful APIs.
- **MongoDB** – NoSQL database for storing application data.
- **Mongoose** – MongoDB object modeling (if used in your project).
- **JWT / Better Auth** – Authentication and authorization (depending on your implementation).
- **CORS** – Handling cross-origin requests.
- **dotenv** – Managing environment variables.

## ✨ Key Features

- **Studio Management:** Create, retrieve, update, and delete studio listings.
- **Studio Categories:** Organize studios into different creative categories.
- **Studio Booking:** Handle studio booking requests and manage booking information.
- **Wishlist Management:** Add and remove favorite studios from a user's wishlist.
- **User Management:** Handle user-related information and operations.
- **Studio Search:** Retrieve studios based on categories, locations, or other supported filters.
- **RESTful API Architecture:** Organized endpoints for smooth frontend-backend communication.
- **Error Handling:** Handle invalid requests and server errors.
- **CORS Configuration:** Allow communication between the frontend and backend applications.

## 🏢 Supported Studio Categories

The API supports the following studio categories:

1. Photo Studio
2. Film Stage
3. Podcast Lounge
4. Music Suite
5. Workshop
6. Sound Stage
7. Art Studio
8. Dance Studio
9. Other

## 📡 API Endpoints

The following is an example endpoint structure for the StudioSpace backend. Adjust the routes to match your actual implementation.

### Studio APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/studio` | Get all studios |
| GET | `/studio/:id` | Get a single studio |
| POST | `/studio` | Create a new studio |
| PATCH | `/studio/:id` | Update studio information |
| DELETE | `/studio/:id` | Delete a studio |

### Booking APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/booking` | Get bookings |
| GET | `/booking/:id` | Get a single booking |
| POST | `/booking` | Create a new booking |
| PATCH | `/booking/:id` | Update booking information |
| DELETE | `/booking/:id` | Delete a booking |

### Wishlist APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/wishlist` | Get wishlist items |
| POST | `/wishlist` | Add a studio to wishlist |
| DELETE | `/wishlist/:id` | Remove a studio from wishlist |

*Note: These endpoints are illustrative. Update them according to the routes implemented in your backend.*

## 📁 Project Structure

```text
StudioSpace-Backend/
├── routes/
│   ├── studioRoutes.js
│   ├── bookingRoutes.js
│   └── wishlistRoutes.js
├── controllers/
├── models/
├── middleware/
├── config/
├── .env
├── .gitignore
├── index.js
└── package.json
```

## ⚙️ Getting Started

Follow these steps to run the backend API locally.

### 1. Clone the Repository

```bash
git clone YOUR_BACKEND_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd StudioSpace-Backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure your environment variables.

```env
PORT=8000
DB_USER=YOUR_DATABASE_USERNAME
DB_PASS=YOUR_DATABASE_PASSWORD
```

Add other required environment variables based on your database and authentication configuration.

### 5. Start the Development Server

```bash
npm run dev
```

Or, if you use Node.js directly:

```bash
node index.js
```

Your backend API will be available at:

```text
http://localhost:8000
```

## 🔗 Frontend Integration

The StudioSpace frontend communicates with this backend through HTTP requests using the REST API endpoints.

Example:

```javascript
const response = await fetch("http://localhost:8000/studio");
const studios = await response.json();
```

## 🔒 Security & Best Practices

- Store sensitive credentials in environment variables.
- Validate incoming request data.
- Protect private routes with authentication and authorization.
- Verify resource ownership before updating or deleting user data.
- Configure CORS for trusted frontend origins.
- Handle errors consistently across API endpoints.

## 🎯 Project Goal

The goal of the StudioSpace Backend API is to provide a reliable and scalable server-side foundation for the StudioSpace platform, enabling creators to discover and book creative spaces while allowing studio owners to manage their listings.

---

**StudioSpace – Find Your Space. Create Your Story.**