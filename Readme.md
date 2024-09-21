# Description
This is an image upload application built with Node.js, PostgreSQL, and AWS S3. The application allows users to upload images, stores metadata in a PostgreSQL database, uploads the images to AWS S3, and sends an email notification upon successful upload, dockerized an application using Docker Container and finally using AWS EC2 Instance Configuration at the End in case i dont have an AWS Credentials

# Features
Upload images to AWS S3
Store image metadata in PostgreSQL
Send email notifications after image upload
Simple REST API for image uploads
Dockerized using Docker Container
Deployment on AWS EC2 Instance



# BACKEND CODING CHALLENGE STRUCTURE

.
├── config/
│   └── db.js                # Database connection setup
├── controllers/
│   ├── authController.js     # User authentication logic
│   ├── imageController.js     # Image upload and retrieval logic
│   └── commentController.js   # Comment handling logic
├── models/
│   ├── user.js               # User model
│   ├── image.js              # Image model
│   └── comment.js            # Comment model
├── routes/
│   ├── authRoutes.js         # Routes for authentication
│   ├── imageRoutes.js        # Routes for image operations
│   └── commentRoutes.js      # Routes for comment operations
├── middlewares/
│   └── authMiddleware.js      # Middleware for JWT verification
├── .env                      # Environment variables (not included in version control)
├── app.js                    # Main application setup (Express)
├── package.json              # Project dependencies
└── README.md                 # Project documentation





Here’s a sample README file for your image upload app using Node.js, PostgreSQL, AWS S3, and email notifications. You can modify it as needed for your specific implementation.

# Image Upload App
Description
This is an image upload application built with Node.js, PostgreSQL, and AWS S3. The application allows users to upload images, stores metadata in a PostgreSQL database, uploads the images to AWS S3, and sends an email notification upon successful upload.

# Features
Upload images to AWS S3
Store image metadata in PostgreSQL
Send email notifications after image upload
Simple REST API for image uploads
Technologies Used
Node.js
Express.js
PostgreSQL
AWS S3
Nodemailer (for sending emails)
Multer (for handling file uploads)
Prerequisites
Node.js and npm installed
PostgreSQL installed and running
AWS account with S3 bucket created
SMTP server details for email notifications


# Installation
# Clone the repository:

bash
Copy code
git clone https://github.com/xoomclones/Backend-Challenge.git
cd Backend-Challenge
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add the following variables:

# .env File
PORT=5000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=your_bucket_name
AWS_REGION=your_region

# Create a database and a table for storing image metadata. Example SQL:
sql
Copy code
CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Start the application:
 npm start
API Endpoints
POST /upload - Upload an image
Request: Form-data with an image file
Response: JSON object with image metadata



 # Email Notification 

The application uses Nodemailer to send an email notification after a successful image upload. Make sure to configure the SMTP settings in the .env file.


# //////////// Docker Configuration //////////////

// Use Node.js official image
FROM node:14

// Create app directory
WORKDIR /app

// Copy all files
COPY . .

//Install dependencies
RUN npm install

// Expose the port
EXPOSE 3000

// Start the server
CMD ["node", "backend/index.js"]



# ////////////// EC2 Instance Configuration ////////////


## AWS EC2 Instance Setup ##
 
# Overview

This repository contains instructions and resources for setting up an Amazon EC2 (Elastic Compute Cloud) instance.

## Getting Started

### Step 1: Launching an EC2 Instance

1. Log in to the [AWS Management Console](https://aws.amazon.com/console/).
2. Navigate to the EC2 Dashboard.
3. Click on "Launch Instance."
4. Choose an Amazon Machine Image (AMI).
5. Select an instance type and click "Next."
6. Configure instance details and click "Next."
7. Add storage if needed and click "Next."
8. Configure security group settings.
9. Review and launch the instance.

### Step 2: Connecting to Your EC2 Instance

- **For Linux Instances:**

  I used SSH to connect:

  ```bash
  ssh -i "your-key.pem" ec2-user@your-instance-public-dns
For Windows Instances:

Use Remote Desktop Protocol (RDP) with the provided credentials.

Step 3: Installing Software
Once connected to your instance, I installed  the necessary software. For example, to install Apache:

bash
Copy code
sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
Security Considerations




######  AUTHOR ########

- Waqas Arif
