# Video Conferencing Site Frontend
This is the React frontend for a video conferencing site, deployed in Docker.

## Screenshots
![image](https://github.com/UsnikB/OC-OnlyChats-FrontEnd/assets/22489448/921a8ab4-6098-4c26-86c4-dc7f03aa889a)

![image](https://github.com/UsnikB/OC-OnlyChats-FrontEnd/assets/22489448/5690bfd9-c3ab-4abf-9a1c-6f7750279048)

![image](https://github.com/UsnikB/OC-OnlyChats-FrontEnd/assets/22489448/871b04ce-6345-4daf-a38f-7071b4205b50)


## Prerequisites
- Docker installed on your machine
- Familiarity with Git and the command line

## Installation
1. Clone the repository: 
```
git clone https://github.com/UsnikB/OC-OnlyChats-FrontEnd.git
```
2. Navigate to the project directory: 

```
cd OC-OnlyChats-FrontEnd
```

3. Build the Docker image: 

```
docker build -t OC-OnlyChats-FrontEnd .
```

## Running the Dockerfile
1. Start a new Docker container: 

```
docker run -p 3000:3000 OC-OnlyChats-FrontEnd
```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Building and Running the Dockerfile
1. Navigate to the project directory: 

```
cd OC-OnlyChats-FrontEnd
```

2. Build the Docker image: 

```
docker build -t OC-OnlyChats-FrontEnd .
```

3. Start a new Docker container: 

```
docker run -p 3000:3000 OC-OnlyChats-FrontEnd
```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

