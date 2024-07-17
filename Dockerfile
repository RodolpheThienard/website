# FROM nginx:alpine
# COPY . /usr/share/nginx/html
# EXPOSE 80

# Use a Node.js base image
FROM node:alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Command to run your Node.js application
CMD ["node", "index.js"]  # Replace with your entry file and command
