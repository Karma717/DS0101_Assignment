# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Run tests
RUN npm test

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
