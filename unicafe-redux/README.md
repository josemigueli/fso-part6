# Unicafe Redux Feedback App

This is a web application developed as part of the Full Stack Open course from the University of Helsinki. The project focuses on using Redux for state management in a React application. The app allows users to provide feedback by selecting one of three options: "good," "ok," or "bad." It also includes a feature to reset the feedback statistics.

## Features

- **Feedback Collection**: Users can submit feedback by clicking on one of the three buttons: "good," "ok," or "bad."
- **Feedback Statistics**: The app displays the total number of feedback submissions for each category.
- **Reset Feedback**: Users can reset all feedback statistics to zero with a single button click.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing global state in the application.
- **Vite**: A fast build tool for modern web development.
- **Jest**: A JavaScript testing framework for writing unit tests.
- **Deep-freeze**: A utility to ensure immutability in tests.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/josemigueli/fso-part6.git
   cd fso-part6/unicafe-redux
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the app.

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.
- `npm run test`: Runs Jest tests.

## State Management

The app uses Redux to manage the feedback state. The state includes three counters:

- **good**: The number of "good" feedback submissions.
- **ok**: The number of "ok" feedback submissions.
- **bad**: The number of "bad" feedback submissions.

The state can be modified using the following actions:

- **GOOD**: Increments the "good" counter.
- **OK**: Increments the "ok" counter.
- **BAD**: Increments the "bad" counter.
- **ZERO**: Resets all counters to zero.

## Testing

The app includes unit tests for the Redux reducer using Jest and deep-freeze. The tests ensure that the reducer correctly handles each action and updates the state as expected.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

## License

This project is open-source and available under the MIT License.
