<strong>📝 Task Management Application </strong>
Overview

This is a comprehensive Task Management Application developed for an assignment with Pedal Start. The application allows users to create, view, edit, and delete tasks. Additionally, it includes features to add and delete collaborators, and to add comments which can be viewed by both parties. The backend is built with Node.js, the database is managed with MySQL, the frontend is developed using Next.js, and Firebase is used for authentication.
🚀 Features

    🔐 User Authentication: Secure user authentication using Firebase.
    📋 Task Management: Create, view, edit, and delete tasks.
    🤝 Collaborators: Add and delete collaborators for tasks.
    💬 Comments: Add comments on tasks that can be viewed by both task owner and collaborators.

🛠 Tech Stack

    Backend: Node.js
    Database: MySQL
    Frontend: Next.js
    Authentication: Firebase

📦 Getting Started
✅ Prerequisites

    Node.js (v14 or above)
    MySQL
    Firebase Account

📥 Installation

    Clone the Repository

    sh

cd pedalstart

Install Dependencies

sh

npm install

Setup MySQL Database

    Create a new database in MySQL.
    and import the .sql file
    

    

Configure Environment Variables

    Create a .env file in the root directory and add the following variables:

    env

    DATABASE_HOST=your-database-host
    DATABASE_USER=your-database-user
    DATABASE_PASSWORD=your-database-password
    DATABASE_NAME=task_management
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    FIREBASE_APP_ID=your-firebase-app-id

Start the Application

sh

    npm run dev

🌟 Usage

    Sign Up / Log In
        Use Firebase authentication to sign up or log in.

    Create a Task
        Navigate to the task creation page and fill in the details.

    Manage Tasks
        View, edit, or delete tasks as needed.

    Add Collaborators
        Add collaborators to your tasks by entering their email.

    Add Comments
        Collaborators can add comments to tasks which are visible to all associated users.

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.
📄 License

This project is licensed under the MIT License.
📧 Contact

For any questions or support, please reach out to ashutosh@windikate.com
<div align="center">
  Made with ❤️ by Ashutosh Srivastava
</div>
