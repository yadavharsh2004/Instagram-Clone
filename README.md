# 📸 INSTAGRAM CLONE

**Live Demo 👉 [https://social-media-murex-ten.vercel.app/](https://social-media-murex-ten.vercel.app/)**

---

A full-stack **Instagram-like social media application** built using React and Firebase. This app lets users share posts, follow others, view suggested users, comment, like posts, and manage their profiles — all in a clean, modern UI.

---

## ✨ Key Features

### 👤 Authentication
- Signup / Login using email and password
- Google Authentication

### 🏠 Home Feed
- View posts from users you follow
- Like and comment on posts
- Post captions and view post footers with interaction counts

### 📸 Create Post
- Upload posts using Cloudinary
- Real-time preview of the uploaded image

### 🔍 Search & Discover
- Search for users by name or username
- View suggested users to follow

### 🧑 Profile Page
- View your own and others' profiles
- Edit profile information (including profile picture via Cloudinary)
- View user posts in a tabbed interface

### 🔔 Notifications
- Basic notification component integration (placeholder/basic functionality)

### 📦 State Management
- Zustand-based store for authentication, post data, and profile management

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JSX, Tailwind CSS, DaisyUI (for Modal)
- **UI Library**: Chakra UI (core components)
- **State Management**: Zustand
- **Backend/Database**: Firebase (Authentication + Firestore)
- **Image Storage**: Cloudinary
- **Routing**: React Router DOM
- **Hosting**: Vercel

---

## 🚀 Getting Started / Running Locally

Follow these steps to get a local copy up and running.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yadavharsh2004/Instagram-Clone.git
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the project's root directory. **Important:** Add `.env` to your `.gitignore` file to avoid committing sensitive keys. Populate it with your Firebase and Cloudinary credentials:
    ```bash
    # Firebase Configuration
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id

    # Cloudinary Configuration (for unsigned uploads)
    VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_unsigned_upload_preset_name
    VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    ```

4.  **Start the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in the browser.

---

## ⭐ Give it a Star!

If you found this project helpful or interesting, please consider starring ⭐ the repository! Your support is appreciated.

---
