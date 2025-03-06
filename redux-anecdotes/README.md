# Redux Anecdotes App

This is a web application developed as part of the Full Stack Open course from the University of Helsinki. The project focuses on managing state using Redux in a React application. The app allows users to view, create, and vote on anecdotes, with additional features like filtering and notifications.

## Features

- **View Anecdotes**: Display a list of anecdotes sorted by the number of votes.
- **Vote on Anecdotes**: Users can vote for their favorite anecdotes.
- **Create New Anecdotes**: Users can add new anecdotes to the list.
- **Filter Anecdotes**: Filter anecdotes based on a search term.
- **Notifications**: Display temporary notifications when an action is performed (e.g., voting or creating an anecdote).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing global state in the application.
- **Redux Toolkit**: A package that simplifies working with Redux by providing utilities to reduce boilerplate code.
- **React-Redux**: Official React bindings for Redux.
- **Axios**: A promise-based HTTP client for making API requests.
- **Vite**: A fast build tool for modern web development.
- **JSON Server**: A simple mock server for simulating a backend API.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/josemigueli/fso-part6.git
   cd fso-part6/redux-anecdotes
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the JSON server (mock backend):

   ```bash
   npm run server
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the app.

### Available Scripts

- `npm run server`: Starts the JSON server on port 3001.
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.

## Application Structure

The application is structured around Redux for state management. Key components include:

- **Store**: Centralized state management using Redux Toolkit.
- **Reducers**: Handle state updates for anecdotes, filters, and notifications.
- **Components**: Reusable UI components like `AnecdoteForm`, `AnecdoteList`, `Filter`, and `Notification`.
- **Services**: Handles API calls to the backend (JSON server).

## State Management

The app uses Redux to manage the following slices of state:

- **Anecdotes**: Stores the list of anecdotes and handles voting and creation.
- **Filter**: Manages the filter term for searching anecdotes.
- **Notification**: Handles temporary notifications displayed to the user.

## License

This project is open-source and available under the MIT License.
