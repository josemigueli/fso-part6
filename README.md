# Full Stack Open Part 6

This repository contains three projects developed as part of the **Full Stack Open Course** from the University of Helsinki. Each project focuses on different aspects of state management in React applications, utilizing modern tools and libraries. Below is a summary of the three projects:

---

## 1. **Query Anecdotes App**

### Overview

The **Query Anecdotes App** is a React-based web application that uses **TanStack React Query** for server state management. It allows users to view, vote, and create anecdotes, with a mock backend powered by **JSON Server**. The app also includes a notification system for user feedback.

### Key Features

- **View Anecdotes**: Fetch and display anecdotes from the server.
- **Vote for Anecdotes**: Users can vote for anecdotes, with real-time updates.
- **Create Anecdotes**: Submit new anecdotes (minimum 5 characters).
- **Notifications**: Feedback for votes, submissions, and errors.

### Technologies

- React, TanStack React Query, Axios, JSON Server, Vite, CSS.

---

## 2. **Redux Anecdotes App**

### Overview

The **Redux Anecdotes App** is a React application that demonstrates state management using **Redux** and **Redux Toolkit**. It allows users to view, vote, and create anecdotes, with additional features like filtering and notifications.

### Key Features

- **View Anecdotes**: Display anecdotes sorted by votes.
- **Vote on Anecdotes**: Vote for anecdotes.
- **Create Anecdotes**: Add new anecdotes.
- **Filter Anecdotes**: Search anecdotes by keyword.
- **Notifications**: Temporary notifications for user actions.

### Technologies

- React, Redux, Redux Toolkit, Axios, JSON Server, Vite.

---

## 3. **Unicafe Redux Feedback App**

### Overview

The **Unicafe Redux Feedback App** is a simple React application that uses **Redux** for state management. It allows users to submit feedback (good, ok, or bad) and view statistics. The app also includes a reset feature for feedback data.

### Key Features

- **Feedback Collection**: Submit feedback using "good," "ok," or "bad" buttons.
- **Feedback Statistics**: Display total feedback counts for each category.
- **Reset Feedback**: Reset all feedback statistics to zero.

### Technologies

- React, Redux, Vite, Jest, Deep-freeze.

---

## General Information

### Common Technologies

- **React**: Used across all projects for building user interfaces.
- **Redux**: Used in the Redux Anecdotes and Unicafe Feedback apps for state management.
- **Vite**: A fast build tool used in all projects.
- **JSON Server**: Used in the Query Anecdotes and Redux Anecdotes apps as a mock backend.

### Installation and Usage

- Each project has its own installation instructions, but all require **Node.js** and **npm** or **yarn**.
- Development servers can be started with `npm run dev`, and mock backends (where applicable) with `npm run server`.

### Testing

- The **Unicafe Redux Feedback App** includes unit tests for the Redux reducer using **Jest** and **deep-freeze**.

### License

All projects are open-source and available under the **MIT License**.

---

This repository showcases the use of modern state management tools like **React Query** and **Redux** in React applications, along with best practices for building and testing web applications.ƒ
