# CampusConnect: Lost & Found System

CampusConnect is a modern, full-stack web application designed to help university students and faculty securely report and recover lost items across campus. Built with a focus on an elegant, premium user interface and reliable data handling.

## 🌟 Key Features

* **Secure Authentication**: Register and login system tailored for university credentials (uses JWT).
* **Comprehensive Dashboard**: Real-time overview of recently lost and found items.
* **Item Reporting**: Easy-to-use forms for reporting lost or found items with image uploads and categorizations.
* **Smart Categories**: Filter items seamlessly by specific categories (Electronics, Books, Clothing, etc.).
* **Premium UI/UX**: Designed using Tailwind CSS with glassmorphism effects, dynamic hover states, and fully responsive layouts.

## 🛠 Technology Stack

* **Frontend**: React.js, Tailwind CSS, React Router
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)
* **Authentication**: JSON Web Tokens (JWT), bcryptjs
* **File Uploads**: Multer

---

## 🚀 Getting Started (Running Method)

Follow these instructions to set up and run the project locally.

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally on port 27017

### 1. Clone the repository
```bash
git clone https://github.com/THISHA123/Campus-Lost-Found.git
cd Campus-Lost-Found
```

### 2. Backend Setup
Navigate into the backend directory:
```bash
cd campusconnect-backend
```

Install the dependencies:
```bash
npm install
```

Create a `.env` file in the `campusconnect-backend` root folder and add the following variables:
```env
MONGO_URI=mongodb://127.0.0.1:27017/campusconnect
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

Start the backend development server:
```bash
npm run dev
```
*(The backend will now be running at http://localhost:5000)*

### 3. Frontend Setup
Open a new terminal window/tab and navigate to the frontend directory:
```bash
cd campusconnect-frontend
```

Install the dependencies:
```bash
npm install
```

Start the React development server:
```bash
npm start
```
*(The frontend will automatically open in your browser at http://localhost:3000)*

## 💡 Usage

1. Open your browser and go to `http://localhost:3000`
2. Create a new account or log in.
3. Access your dashboard, report lost items, or browse through the various categories to find what you're looking for.
