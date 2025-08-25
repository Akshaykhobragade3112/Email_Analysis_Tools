# Email Analysis Tool

A full-stack web application that analyzes raw email headers to extract the Receiving Chain and detect the Email Service Provider (ESP) such as Gmail, Outlook, Yahoo, etc.

## Features :

1. Parse Email Headers → Extract structured details from raw email headers.

2. Detect ESP Type → Identify if the email originated from Gmail, Outlook, Yahoo, or others.

3. Real-Time Analysis → Instantly submit & analyze headers.

4. Modern UI → Clean React frontend with professional design.

5. RESTful API → Backend powered by Express.js + MongoDB.

## Tech Stack :

Frontend: React.js (CRA, CSS, React Router)  
Backend: Node.js, Express.js  
Database: MongoDB (Atlas cloud database)  
Deployment: Render (Backend + Frontend)  

## Project Structure :
```bash
Email_Analysis_Tool/
│── backend/                 # Node.js backend (Express + MongoDB)
│   ├── src/
│   │   ├── config/db.js      # MongoDB connection
│   │   ├── controllers/      # Controller logic
│   │   ├── routes/           # Express routes
│   │   ├── models/           # Mongoose models
│   │   ├── utils/            # Parsing & ESP detection utils
│   │   └── services/         # Business logic
│   ├── server.js             # Backend entry
│   └── .env                  # Env variables (Mongo URI, PORT)
│
│── frontend/                # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Pages (Home, Dashboard)
│   │   ├── services/api.js   # Axios API calls
│   │   └── styles/           # Global styles
│   ├── public/
│   └── package.json
│
│── README.md                # Documentation
│── .gitignore               # Ignore node_modules, env, build

```
## Installation & Setup :
### 1. Clone Repo :
```bash
git clone https://github.com/your-username/Email_Analysis_Tool.git
cd Email_Analysis_Tool

```
### 2. Backend Setup :
```bash
cd backend
npm install

# Create .env file in backend/:

MONGO_URI=your_mongodb_atlas_uri
PORT=5000

# Run backend:
node server.js
```
Backend will run at → http://localhost:5000

### 3. Frontend Setup :
```bash
cd frontend
npm install
npm start

```
Frontend will run at → http://localhost:3000

## API Endpoints :

Method	Endpoint	Description 
```bash
POST →	/api/emails	  # Submit new email header  
GET →	/api/emails	  # Get all analyzed emails
```  
### Example Request :
```bash
{
  "subject": "Test Email",
  "rawHeaders": "Received: from mail.gmail.com (mail.gmail.com. [74.125.200.27])\nReceived: by mx.example.com\nFrom: user@gmail.com\nTo: test@example.com\nSubject: Test Email"
}
```

### Example Response :
```bash
{
  "subject": "Test Email",
  "receivingChain": [
    "Received: from mail.gmail.com (mail.gmail.com. [74.125.200.27])",
    "Received: by mx.example.com"
  ],
  "espType": "Gmail"
}
```

## Deployment :

The project can be deployed using Render:  

Backend → Deployed as Web Service  

Frontend → Deployed as Static Site  

Database → MongoDB Atlas  

### Deployed Link : 
https://email-analysis-tools1.onrender.com/
