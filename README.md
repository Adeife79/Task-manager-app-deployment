# Simple Task Manager Website Application

A full-stack Todo application built with React, Node.js, Express, MongoDB, Docker, GitHub Actions CI/CD, AWS ECR, EC2, and Terraform.

---

 ## Features
 - Create tasks
 - Delete tasks
 - Update task status
 - REST API backend
 - MongoDB database
 - Dockerized frontend and backend
 - CI/CD with GitHub Actions
 - AWS deployment with ECR and EC2
 - Infrastructure provisioning with Terraform

 ---

 ## Tech Stack
  ### Frontend
  - React
  - Vite
  - Axios

  ### Backend
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

### DevOps/Cloud
- Terraform
- Docker
- Docker Compose
- GitHub Actions
- AWS EC2
- AWS ECR

---

## Project Structure
```
gh-actions-demo4
├── .github
│   └── workflows
│       ├── ci.yml
│       └── deploy.yml
├── Todo-app
│   ├── backend
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── taskController.js
│   │   ├── models
│   │   │   └── Task.js
│   │   ├── routes
│   │   │   └── taskRoutes.js
│   │   ├── .dockerignore
│   │   ├── Dockerfile
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── server.js
│   └── client
│       ├── src
│       │   ├── components
│       │   │   ├── TaskForm.jsx
│       │   │   └── TaskList.jsx
│       │   ├── App.css
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── .dockerignore
│       ├── Dockerfile
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       └── vite.config.js
├── aws-infra
│   ├── backend.tf
│   ├── compute.tf
│   ├── ecr.tf
│   ├── networking.tf
│   ├── output.tf
│   ├── provider.tf
│   ├── security.tf
│   └── variables.tf
├── .gitignore
├── README.md
├── docker-compose.yml
├── package-lock.json
└── package.json
```

---

## Prerequisites
Make sure the following are installed on your system:
- Node.js
- Docker
- Docker Compose
- Git
- AWS CLI
- Terraform CLI

---

## Local Set Up 
### Website Application Set Up
1. Create a Todo-app folder:
```bash
mkdir Todo-app
```
2. Change directory to the app directory and create required folders and files:
```bash
cd Todo-app
mkdir backend
mkdir client
```
3. Install dependencies for the backend:
```bash
cd backend
npm install
```
4. Install dependencies for the client: 
```bash
cd ../client
npm install
```
----

### Infrastructure Set Up
1. Create aws-infra folder:
```bash
mkdir aws-infra
```
2. Create .tf files in the aws-infra folder:
```bash
cd aws-infra
touch backend.tf compute.tf ecr.tf networking.tf output.tf provider.tf security.tf variables.tf
```
3. Create AWS resources ( VPC, Subnets, Internet Gateway, Route Table, Route Table Association, Security Group, Instance, and ECR repositories for both backend and frontend docker image).
4. Authenticate into AWS Account with AWS Secret Access Key and the Access Key:
```bash
aws configure
```
5. Initialize terraform:
```bash
terraform init
```
6. Genarate terraform plan:
```bash 
terraform plan
```
7. Apply terraform to create the required services on AWS:
```bash
terraform apply -auto-approve
```
----

### Docker Set up
1. Change directory to app directory and create Dockerfile for the backend and client:
```bash
cd Todo-app
cd backend
touch Dockerfile
cd ../client
touch Dockerfile
```
2. Login to AWS ECR to be able to push both the backend and client docker images:
```bash
aws ecr get-login-password --region 
```
3. Build and push the client Image to AWS ECR:
```bash
docker build -t <image_name>:tag .
docker tag <image_name>:tag <account_id>.dkr.ecr.<aws_region>.amazonaws.com/<image_name>:tag
docker push <account_id>.dkr.ecr.<aws_region>.amazonaws.com/<image_name>:tag
```
4. Build and push the backend Image to AWS ECR:
```bash 
docker build -t <image_name>:tag .
docker tag <image_name>:tag <account_id>.dkr.ecr.<aws_region>.amazonaws.com/<image_name>:tag
docker push <account_id>.dkr.ecr.<aws_region>.amazonaws.com/<image_name>:tag
```
5. Create a docker-compose.yml file in the root folder:
```bash 
cd gh_actions_demo
mkdir docker-compose.yml
```
6. Install Mongo dependencies:
```bash
npm install express mongoose cors dotenv
```
7. Run docker compose to start the backend server, frontend server, and the mongodb:
```bash
docker compose up -d
```
8. Open your web browser and navigate to `http://localhost:8095` to access the Task Manager Website.

---

## Secrets & Environment Variables

Create the required secrets for the project repository on the secrets and variables in the repository settings.

---

## CI/CD Pipeline (GitHub Actions)
This project uses GitHub Actions to automate the full integration and deployment lifecycle. Every push to the main branch triggers the pipeline which builds both fronetnd and backend Docker Images, pushes them to AWS ECR, and deploys the Task Manager website application to an AWS EC2 instance provisioned with Terraform.

### Workflow Files
---
`.github/workflows/deploy.yml`
---
`.github/workflows/ci.yml`
---

### CI Workflow Steps
```text
Developer pushes code 
      ↓
Checks out repository code
      ↓
Configures AWS credentials
      ↓
Creates S3 backend
      ↓
Sets up terraform
      ↓
Initializes terraform
      ↓
Plan terraform
      ↓
Apply terraform
```

---

### CD Workflow Steps
```text
Runs workflow when terraform workflow is completed
          ↓
Checks out repository code
          ↓
Configures AWS credentials
          ↓
Sets up terraform
          ↓
Get EC2 IP from terraform state
          ↓
Logs into Amazon ECR
          ↓
Builds and pushes client image
          ↓
Builds and pushes backend image
          ↓
Sets up SSH key
          ↓
Get ECR login password
          ↓
Copy docker-compose.yml file to EC2
          ↓
Deploys app to EC2 via SSH
```
---

## Contributions
Contributions to this project are welcome!

















