FROM node:14-alpine

WORKDIR /usr/src/app

COPY frontend/package*.json ./

# Install client dependencies
RUN npm install

# Copy client files
COPY frontend/ .

# Expose the port your client is listening on
EXPOSE 3000

# Command to start your client
CMD ["npm", "start"]
