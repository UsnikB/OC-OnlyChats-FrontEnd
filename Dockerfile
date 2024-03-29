# Use Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# RUN npm install react-router-dom

# RUN npm install bootstrap --save

RUN npm install agora-rtc-react
# RUN npm i agora-token

# RUN npm install --save animate.css-react
# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the host machine
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
