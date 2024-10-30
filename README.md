# System Design Tool

## Overview

The System Design Tool is a web application designed to assist users in creating and visualizing system architecture diagrams. It provides a drag-and-drop interface for adding components, making it easier to conceptualize and communicate system designs.

## Features

- **Drag-and-Drop Interface**: Easily add components to your design canvas.
- **Component Library**: Access a variety of pre-defined components for common system elements.
- **User Authentication**: Register and log in to save your designs.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (for backend)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshuchawda/system-design-tool.git
   ```

2. Navigate to the project directory:

   ```bash
   cd system-design-tool
   ```

3. Install the frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install the backend dependencies:

   ```bash
   cd ../system-design-tool-backend
   npm install
   ```

5. Create a `.env` file in the `system-design-tool-backend` directory and add your MongoDB URI and JWT secret:

   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd system-design-tool-backend
   npm start
   ```

2. In a new terminal, start the frontend application:

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Usage

- **Register**: Create a new account to save your designs.
- **Login**: Access your saved designs.
- **Design Canvas**: Use the drag-and-drop feature to add components to your design.
- **Component Library**: Select components from the library to add to your canvas.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
