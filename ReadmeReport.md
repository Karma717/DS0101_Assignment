# Continuous Integration & Continuous Deployment
# DSO101 Documentation

---------------
Topics Covered
---------------
• Linux Fundamentals
• Software Development Life Cycle (SDLC)
• Docker Containerization
• Jenkins Automation

---------------------------
What is a CI/CD Pipeline?
---------------------------

A CI/CD pipeline is a process used in software development to automate building, testing, and deploying applications.

CI = Continuous Integration
Developers frequently merge code into a shared repository.

It automatically:

Builds the code
Runs tests
Checks for errors

CD = Continuous Delivery / Deployment
Continuous Delivery

Code is automatically prepared for release
Manual approval needed to deploy
Continuous Deployment
Code is automatically deployed to production
No manual approval needed

-----------
CI/CD Flow
-----------
Code → Build → Test → Deploy → Production

# Why CI/CD is Important
Faster development
Fewer bugs
Automatic deployment
Saves time
Consistent releases

 
----------------------
1. Linux Fundamentals
----------------------
Linux is a free and open-source Unix-like operating system kernel. 
- The kernel is the core part of the OS that manages hardware and software communication.

What is a shell?
A shell is a command-line interface used to interact with Linux (e.g., bash).

Linux is the foundation of most CI/CD pipelines and server infrastructure used in DevOps environments.
It is stable, secure, and supports tools like Docker, Jenkins, and CI/CD pipelines.

---------------
What is Linux?
---------------
Linux was created by Linus Torvalds in 1991. 
It is widely used in servers, embedded systems, and cloud computing platforms such as AWS, Azure, and Google Cloud.

What is the root user?
The root user is the admin user with full system access.

------------
Key Features
------------
•	Open Source — free to use, modify, and distribute
•	Multi-user & Multi-tasking support
•	Highly Secure with permission-based access control
•	Stable and reliable for server environments
•	Large community and extensive package ecosystem


# Essential Linux Commands

| | Command  | Purpose                                                          
| -------- | ---------------------------------------------------------------- |
| `pwd`    | Show current directory                                           |
| `ls`     | List files and folders                                           |
| `cd`     | Change directory                                                 |
| `mkdir`  | Create a directory                                               |
| `rmdir`  | Remove an empty directory                                        |
| `rm`     | Remove files/directories                                         |
| `cp`     | Copy files/directories                                           |
| `mv`     | Move or rename files                                             |
| `touch`  | Create an empty file                                             |
| `cat`    | Display file contents                                            |
| `grep`   | Search for text in files                                         |
| `find`   | Search for files/directories                                     |
| `chmod`  | Change file permissions                                          |
| `ps`     | Show running processes                                           |
| `kill`   | Terminate a process                                              |
| `ls -la` | List all files with detailed information, including hidden files |
| `sudo`   | Run a command with superuser privileges                          |

------------------
Practice question
------------------
----------------------
Basic management task
----------------------
1. display the current working directory.
#pwd

2. List all files in the current directory.
#ls

3. List hidden files as well
#ls -a

4. Move to the home directory
#cd ~

5. Return to the previous directory.
#cd -
--------------------------
Directory management task
--------------------------
1. create the following directory structures
Student _lab/Linux/networking/programming
#mkdir -p Student_lab/Linux/networking/programming

2. Go inside the Student _lab 
#cd Student_lab
and  go create two folder made Linux
Comand
Script.
#mkdir Command Script
3/ Delete the folder "programming"
#rm -r Linux/networking/programming
---------------------
File management task
---------------------
1) Create a file call notes.txt inside the Linux folder
Create a file call perform.txt inside the Linux folder
#touch Student_lab/Linux/notes.txt
#touch Student_lab/Linux/perform.txt

2) Copy notes.txt to comand folder
Rename perform.txt to Linux_practice.txt
#cp Student_lab/Linux/notes.txt Student_lab/Command/
#mv Student_lab/Linux/perform.txt Student_lab/Linux/Linux_practice.txt
3/ Move Linux_practice.txt to the script folder.
#mv Student_lab/Linux/Linux_practice.txt Student_lab/Script/
------------------
File viewing task
------------------
1) Add the following text inside the notes.txt
-Linus is an open source at operating system 
-it is widely used on sever and cloud computing 
#echo "Linux is an open source operating system" > Student_lab/Linux/notes.txt
#echo "It is widely used on servers and cloud computing" >> Student_lab/Linux/notes.txt
2/ display the context of notes.txt using three different commands.
#cat Student_lab/Linux/notes.txt
#more Student_lab/Linux/notes.txt
#less Student_lab/Linux/notes.txt
--------------
Senching task
--------------
1/ search the text word Linux in note.txt
#grep "Linux" Student_lab/Linux/notes.txt

2) find all .txt files under student_lab
#find Student_lab -name "*.txt"

------------------
Network task
------------------
1) Check if google.com is reachable 
#ping -c 4 google.com

2) download a sample file and URL
#wget https://www.w3.org/TR/PNG/iso_8859-1.txt

--------------------------
SYSTEM INFRASTRUCTURE TASK
--------------------------
1) check the followings 
   OS version
   #cat /etc/os-release

   kernel version
   #uname -r

   current login user
   #whoami

   system update 
   #sudo apt update
   #sudo apt upgrade

-----------------------
Process management task
-----------------------
1) Display running process 
#ps aux
2) DisPlay processes in real time 
#top
3) Stop running processes
#htop

-----------------------------------------
1. Software Development Life Cycle (SDLC)
-----------------------------------------

The Software Development Life Cycle (SDLC) is a structured process used by software development teams to design, develop, test, and deliver high-quality software. CI/CD is deeply integrated into modern SDLC methodologies.

------------
SDLC Phases
------------
1. Planning	Define scope, resources, timeline, and feasibility
2. Requirements	Gather and document functional & non-functional requirements
3. System Design	Architect system components, database, and UI design
4. Implementation	Write code based on design specifications
5. Testing	Unit, integration, system, and UAT testing
6. Deployment	Release to staging and production environments
7. Maintenance	Monitor, patch, and enhance the system post-release

# SDLC Models
----------------
Waterfall Model
----------------

A linear sequential model where each phase must complete before the next begins. Best for well-defined projects with stable requirements.
•	Simple and easy to manage
•	Poor flexibility for changing requirements
•	Testing done only after development

------------
Agile Model
------------

An iterative and incremental approach that delivers working software in short cycles called Sprints (2–4 weeks).
•	Customer collaboration over contract negotiation
•	Responding to change over following a plan
•	Working software over comprehensive documentation
•	Frameworks: Scrum, Kanban, SAFe

-------------
DevOps Model
-------------

DevOps bridges development and operations teams, enabling faster and more reliable software delivery through automation.
•	Continuous Integration (CI) — automated build and test
•	Continuous Delivery (CD) — automated release preparation
•	Continuous Deployment — automated production deployment
•	Infrastructure as Code (IaC) — Terraform, Ansible


# Version Control with Git
•	git init — initialize a new repository
•	git clone URL — clone remote repository
•	git add . — stage all changes
•	git commit -m 'message' — commit staged changes
•	git push origin main — push to remote branch
•	git pull — fetch and merge remote changes
•	git branch feature — create a new branch
•	git merge feature — merge branch into main


----------
3. Docker 
----------

Docker is an open-source platform that allows developers to package applications and their dependencies into lightweight, portable containers. Containers run consistently across any environment.

-------------
Key Concepts
-------------
Image	A read-only template with instructions to create a container
Container	A running instance of a Docker image
Dockerfile	A text file with instructions to build a Docker image
Registry	A repository to store and share Docker images (Docker Hub)
Volume	Persistent storage that survives container restarts
Network	Virtual network enabling container-to-container communication
Compose	Tool for defining multi-container applications in YAML

--------------------
Docker Architecture
--------------------
Docker uses a client-server architecture:

1. Docker Client
The interface used by users to interact with Docker.
Executes commands such as docker build, docker pull, and docker run.

1. Docker Daemon (dockerd)

The background service that manages Docker objects.
Responsible for building images, running containers, managing networks, and handling storage.

3. Docker Images

Read-only templates used to create containers.
Contain application code, libraries, dependencies, and configurations.

4. Docker Containers

Running instances of Docker images.
Lightweight, isolated environments that execute applications.

5. Docker Registry

Stores and distributes Docker images.
Can be public (Docker Hub) or private.
Allows users to push and pull images.

6. containerd

A low-level container runtime.
Handles container execution, lifecycle management, and image transfers.
Workflow

# Dockerfile 
- Scripts used to build docker images
-------------------
Dockerfile Example
------------------
FROM	 Base image (e.g., FROM ubuntu:22.04)
WORKDIR	 Set working directory inside container
COPY	 Copy files from host to container
RUN	     Execute commands during image build
EXPOSE	 Document the port the container listens on
CMD	     Default command to run when container starts

------------------------------
Common Types of Docker Images
------------------------------

Docker images are prebuilt environments used to run applications and services.

1. Base Images

Basic operating system images.

Examples:

Ubuntu
Alpine Linux
Debian

2. Programming Language Images

Used for development environments.

Examples:

Python
Node.js

3. Web Server Images

Used to host websites and applications.

Examples:

Nginx
Apache HTTP Server

----------------
Docker Commands
----------------
| Command                            | Purpose                                |
| ---------------------------------- | -------------------------------------- |
| `docker --version`                 | Display Docker version                 |
| `docker info`                      | Show Docker system information         |
| `docker images`                    | List all local images                  |
| `docker pull <image>`              | Download an image from a registry      |
| `docker build -t <name> .`         | Build an image from a Dockerfile       |
| `docker push <image>`              | Push an image to a registry            |
| `docker rmi <image>`               | Remove an image                        |
| `docker run <image>`               | Create and start a container           |
| `docker run -d <image>`            | Run a container in detached mode       |
| `docker ps`                        | List running containers                |
| `docker ps -a`                     | List all containers                    |
| `docker stop <container>`          | Stop a running container               |
| `docker start <container>`         | Start a stopped container              |
| `docker restart <container>`       | Restart a container                    |
| `docker rm <container>`            | Remove a container                     |
| `docker exec -it <container> bash` | Open a terminal inside a container     |
| `docker logs <container>`          | View container logs                    |
| `docker inspect <container>`       | Display detailed container information |
| `docker network ls`                | List Docker networks                   |
| `docker volume ls`                 | List Docker volumes                    |

# docker run <image> sh -c "while true; do date; sleep 1; done"
What this command does
Part	Meaning
docker run	Creates and starts a new container
<image>	Name of the Docker image to run
sh -c	Runs shell commands inside the container
while true	Infinite loop
date	Prints current date and time
sleep 1	Waits for 1 second
done	Ends the loop

--------------------
Docker Status Codes
--------------------

| Status Code | Meaning                                   |
| ----------- | ----------------------------------------- |
| `0`         | Container exited successfully             |
| `1`         | General application error                 |
| `125`       | Docker run command failed                 |
| `126`       | Command cannot execute                    |
| `127`       | Command not found                         |
| `130`       | Container stopped manually (`Ctrl + C`)   |
| `137`       | Container killed forcefully (OOM or kill) |
| `143`       | Container terminated gracefully           |

-------------------------------
Docker Attach vs Detached Mode
------------------------------

Docker containers can run in two main modes: attached mode and detached mode

1. Attached Mode (Foreground Mode)

In attached mode, the container runs in the foreground and is directly connected to your terminal. You can see logs and output in real time.

Command:
docker run ubuntu
What happens:
Container starts
You see output directly in terminal
Terminal is blocked (you cannot use it for other commands until container stops)

Use case:
Debugging
Watching logs live
Testing applications
 
2. Detached Mode (Background Mode)

In detached mode, the container runs in the background and does not block your terminal.

Command:
docker run -d ubuntu
What happens:
Container runs in background
You immediately get terminal back
You can still use terminal for other commands

# Difference between VM and Container
Virtual Machine	Container
Heavy	Lightweight
Has full OS	Shares host OS
Slow startup	Fast startup

What is port mapping in Docker?

Connecting container ports to host ports.
docker run -p 3000:3000 app


---------------
Docker Compose
---------------
Docker Compose allows defining and running multi-container applications using a docker-compose.yml file. Common services include web app + database + cache.
•	docker-compose up -d — start all services
•	docker-compose down — stop and remove containers
•	docker-compose logs — view logs for all services
•	docker-compose build — rebuild images

-----------------
Volume of Docker
-----------------
A special storage space managed by docker, outside the container
•	It is independent of containers 
•	Survives container deletion
•	Stored somewhere like: /var/lib/docker/volume/
 .

Practice of storing data in a non-volatile storage environment such as hard drives to ensure it remains intact and accessible even after an application is closed a PC is turned off or a system fails what  is non-volatile,intact

-------------
What is pip?
-------------
Pip Install Packages

pip is the package manager for Python.
It is used to install and manage Python libraries.

--------
Flask
--------
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World"

app.run(debug=True)

Flask is a lightweight Python web framework used to build:

Websites
Web applications
APIs

It is simple, fast, and beginner-friendly.

Why Flask is Popular
Lightweight and minimal
Easy to learn
Flexible
Good for small and medium projects
Used for REST APIs and backend development

# Docker Workflow

Docker workflow begins when a developer writes a Dockerfile containing instructions for the application environment and dependencies. Docker uses this Dockerfile to build a Docker image, which acts as a blueprint of the application. The image is then used to create Docker containers, which run the application consistently on any system. Developers can test the container locally and then push the image to repositories like Docker Hub. In production, servers pull the image and run containers, ensuring the application behaves the same in development, testing, and deployment environments.

# Docker in CI/CD Pipeline
1.	Developer commits code to Git repository
2.	CI pipeline triggers automatically (Jenkins/GitHub Actions)
3.	Docker image is built using Dockerfile
4.	Image is tagged with build number or commit hash
5.	Automated tests run inside Docker container
6.	Image pushed to Docker Hub or private registry
7.	CD pipeline pulls image and deploys to server
8.	Health checks verify the deployment is successful
 

----------------------------
4. Jenkins CI/CD Automation
----------------------------

Jenkins is an open-source automation server written in Java. It is the most widely used CI/CD tool, enabling developers to build, test, and deploy software automatically.

# Key Features
•	Free and open-source with a large plugin ecosystem (1800+ plugins)
•	Supports distributed builds across multiple agents
•	Pipeline as Code using Jenkinsfile (Groovy DSL)
•	Integration with Git, Docker, Kubernetes, AWS, and more
•	Web-based dashboard for monitoring builds
•	Role-based access control for team security

# Common Pipeline Stages
9.	Checkout — Clone source code from Git
10.	Build — Compile code, run Maven/Gradle/npm
11.	Test — Execute unit and integration tests
12.	Code Analysis — Run SonarQube quality scan
13.	Docker Build — Build and tag Docker image
14.	Push to Registry — Push image to Docker Hub
15.	Deploy to Staging — Deploy and run smoke tests
16.	Approval Gate — Manual approval for production
17.	Deploy to Production — Final production deployment
18.	Notify — Send Slack/email notification with results

Jenkins workflow starts when a developer pushes code to a repository such as GitHub. Jenkins detects the new changes automatically using webhooks or polling. After detecting the changes, Jenkins pulls the latest code and begins the CI/CD pipeline. It first builds the application, then runs automated tests to check for errors or failures. If all tests pass, Jenkins can package the application and deploy it to a testing or production server. Jenkins pipelines are divided into stages such as Build, Test, and Deploy, making the software delivery process automated, fast, and reliable.

