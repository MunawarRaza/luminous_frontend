# --- Dev App image ---
FROM node:18-alpine AS app

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy necessary source files
COPY . .

# Install dependencies
RUN npm set progress=false && npm install

# Expose port 3000
EXPOSE 3000

# Start React app
CMD ["npm", "run", "dev-exposed"]

# ====================================================================================================

# --- Storybook image ---
FROM node:18-alpine AS storybook

# Set the working directory
WORKDIR /usr/src/storybook

# Copy 'node_modules' from 'builder' stage
COPY --from=app /usr/src/app/node_modules ./node_modules

# Copy necessary source files
COPY . .

# Expose port 8086
EXPOSE 8086

# Start Storybook
CMD ["npm", "run", "storybook"]
