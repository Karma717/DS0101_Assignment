 
GITHUB ACTION AND RENDER DOCUMENTATION
DSO101
 
 
What is GitHub Actions?
CI/CD automation tool inside GitHub that lets you automatically build, test, and deploy your code whenever something changes in your repository.

Example Workflow:
When you push code to GitHub, it can automatically:
•	Build your project 
•	Run tests 
•	Create Docker images 
•	Push images to Docker Hub 
•	Deploy to cloud (Render, AWS, etc.) 
GitHub → Actions → Docker Build → Docker Hub → Deployment

A workflow in GitHub action is a set of instructions that GitHub follows automatically.
Workflows are written in a YAML file.

Creating a workflow:
Step 1. Create a folder 
•	mkdir  .github
Step 2. Create another folder inside the folder
•	mkdir .github/workflows
Step 3. Create a yaml file inside the folder
•	touch .github/workflows/deploy.yml
Inside deploy.yml:
 

Step 4: Push code to GitHub
•	git add .
•	git commit -m "add github actions"
•	git push origin main

Step 5: Go to GitHub repo:
•	Click Actions tab 
•	You will see workflow running automatically 










What is Render?
Render is a cloud platform used to deploy and host web applications, APIs, and databases easily without managing servers manually.
What Render Does
•	Hosts web apps (Flask, Node.js, Django, etc.) 
•	Runs APIs 
•	Supports Docker containers 
•	Auto-deploys from GitHub 
•	Provides HTTPS (secure link)
How Render Works
•	Code → GitHub → Render → Live Website


How Render and GitHub actions Works Together?
GitHub Actions and Render work together to create a complete CI/CD workflow for deploying applications. When a developer pushes code to a GitHub repository, GitHub Actions automatically triggers a workflow that can build the project, install dependencies, and run tests to ensure the code is correct and error-free. If all steps pass successfully, the updated code is then deployed to Render either directly or through a connected deployment setup. Render pulls the latest code from the repository, builds the application if needed, and hosts it on a cloud server, making it accessible through a public URL. This combination ensures that every code change is tested automatically and deployed seamlessly, reducing manual effort and making the deployment process faster, reliable, and consistent across development and production environments.


