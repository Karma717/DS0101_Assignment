# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install root dependencies used by the assignment test/build scripts
COPY package*.json ./
RUN npm ci

# Install backend dependencies inside backend/ so server.js can resolve them
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --omit=dev

# Copy application source
COPY backend ./backend
COPY frontend ./frontend

# Run tests during the image build
RUN npm test

# Render provides PORT at runtime. The local default is documented as 5000.
ENV PORT=5000
EXPOSE 5000

# Start app
CMD ["npm", "start"]
