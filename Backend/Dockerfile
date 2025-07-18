# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Expose your backend port
EXPOSE 8000

# Start the server
CMD ["node", "server.js"]
