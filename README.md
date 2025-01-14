# Notification Service

This project is a React application that integrates with Firebase Cloud Messaging to send and receive notifications. It demonstrates how to request notification permissions, retrieve a messaging token, and handle background notifications.

## Prerequisites

- Node.js and npm installed
- Firebase project set up

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/notification-service.git
   cd notification-service
   ```
2. **Install dependencies**
    ```
    npm install
    ```
3. **Set up environment variables:**
    Create a .env file in the root of the project and add your Firebase configuration:
    ```sh
    REACT_APP_FIREBASE_API_KEY=your_api_key_here
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
    REACT_APP_FIREBASE_APP_ID=your_app_id_here
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

    REACT_APP_FIREBASE_VAPID_KEY=your_vapid_key_here
    ```
4. **Start the development server:**
    ```sh
    npm start
    ```
    The application will be available at http://localhost:3000.



## Project Structure

- 📄 **src/firebase.js**: Initializes Firebase and sets up messaging.
- 📄 **App.js**: Main application component that requests notification permissions and retrieves the messaging token.
- 📂 **public/firebase-messaging-sw.js**: Service worker to handle background notifications.
- 📂 **public/firebase-config.js**: Firebase configuration for the service worker.

---

## Usage

1. **Request Notification Permission**:  
   When the application loads, it will request notification permission from the user.  
   If granted, it will retrieve a messaging token and log it to the console.

2. **Handle Background Notifications**:  
   The service worker (**firebase-messaging-sw.js**) will handle background notifications and display them to the user.

