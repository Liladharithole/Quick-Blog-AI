# 🚀 Quick Blog AI

## ✨ Overview

Quick Blog AI is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to provide a seamless and intuitive platform for creating, managing, and publishing blog posts. This project leverages the power of AI (Google Gemini) for content generation, making it incredibly easy to draft engaging articles. It features a robust administrative panel for content management and a user-friendly interface for readers.

## 🌟 Features

### User-Facing

- **Dynamic Blog Listing:** Browse through a collection of blog posts with infinite scroll.
- **Detailed Blog View:** Read full blog posts with rich text formatting.
- **Responsive Design:** Enjoy a consistent experience across various devices.

### Admin Panel

- **Dashboard:** Get an overview of your blog's performance and content.
- **Add New Blog:** Create new blog posts with a rich text editor and AI-powered content generation.
- **Manage Blogs:** Edit, delete, and publish existing blog posts.
- **Comment Management:** View and moderate comments on your blog posts.
- **Secure Login:** Protect your administrative access with a dedicated login page.

## 🛠️ Technologies Used

### Frontend (Client)

- **React.js:** A powerful JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Quill.js:** A modern rich text editor for creating and editing blog content.
- **React Router DOM:** For declarative routing in the React application.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Hot Toast & React Toastify:** For elegant and responsive notifications.
- **Framer Motion:** For smooth animations and transitions.

### Backend (Server)

- **Node.js:** A JavaScript runtime for building scalable server-side applications.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing blog posts, comments, and user data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Google Gemini API:** Integrated for AI-powered content generation.
- **ImageKit:** For efficient image management and optimization.
- **JSON Web Token (JWT):** For secure authentication and authorization.
- **Multer:** Middleware for handling `multipart/form-data`, primarily used for file uploads.
- **Dotenv:** For loading environment variables from a `.env` file.
- **Nodemon:** A tool that helps develop Node.js applications by automatically restarting the node application when file changes are detected.
- **CORS:** Middleware to enable Cross-Origin Resource Sharing.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB (local or cloud-hosted)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/liladharrrrr/Quick-Blog-AI.git
    cd Quick-Blog-AI
    ```

2.  **Backend Setup:**

    ```bash
    cd server
    npm install
    ```

    Create a `.env` file in the `server` directory with the following environment variables:

    ```
    PORT= any port number that you want to use like 4000, 5000, 6000, etc.
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    GEMINI_API_KEY=your_google_gemini_api_key
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory with the following environment variables:
    ```
    VITE_SERVER_URL=http://localhost: any port number that you use in backend like 4000, 5000, 6000, etc.
    ```

### Running the Application

1.  **Start the Backend Server:**

    ```bash
    cd server
    npm run server
    ```

    The server will run on `http://localhost: any port number that you use in backend like 4000, 5000, 6000, etc.` (or the port specified in your `.env`).

2.  **Start the Frontend Development Server:**
    ```bash
    cd ../client
    npm run dev
    ```
    The client application will open in your browser, usually at `http://localhost: any port number that you use in frontend like 5173, 5174, 5175, etc.`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## 📄 License

This project is released without an open-source license. All rights reserved.

## 📞 Contact

For any questions or inquiries, please contact [Liladhar Ithole](mailto:liladharrrrr@gmail.com).

## Development Resources

This project was developed with the assistance of:

- ChatGPT and Cursor and Windsurf for code suggestions and problem-solving
- YouTube tutorials

Special thanks to the AI tools and content creators who made learning and development more accessible.
