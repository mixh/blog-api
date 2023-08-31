FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install server dependencies
RUN npm install

# Copy server files
COPY backend/ .

# Expose the port your server is listening on
EXPOSE 3333

# Command to start your server
CMD ["npm", "start"]
