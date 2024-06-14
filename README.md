# DJS10 Project - Asynchrony

## Introduction

I had to make a basic React application for this project that pulls blog entries from an external API and displays them. The application serves as an example of how to handle errors and maintain a seamless user experience using React hooks for side effects and state management.

## Project Overview

This project's primary goal is to retrieve blog posts from `https://jsonplaceholder.typicode.com/posts` and present them within the user interface. The project demonstrates how to use hooks to manage state, integrate other APIs into a React application, and gracefully handle errors.

## Requirements

1. Create a React application
2. API Integration
3. State Management
4. Error Handling
5. UI Rendering
6. Testing Error States

## Elements Included

**API Integration:** asynchronously retrieved blog entries from `https://jsonplaceholder.typicode.com/posts` using the Fetch API. Looked for issues in the API response and handled them appropriately.

**State Management:** managed the fetched posts using React's useState hook. When the component mounts, the API call is made using the useEffect hook.

**Error Handling:** included error handling to identify and show errors that occurred during the API call. Error messages were shown to the user after being saved in the state.

## Reflections

### Areas of Mastery

**API Integration:** successfully used the Fetch API to incorporate an external API and efficiently handled asynchronous processes.

**State Management:** effectively managed the side effects and component state using the React hooks `useState` and `useEffect`.

**Error Handling:** incorporated robust error handling to guarantee that, in the event of a malfunction, the user receives insightful feedback from the programme.

### Challenges Faced

Making sure the user interface (UI) appeared appropriately depending on various states was the main problem I faced. As well as managing the conditional logic to display either the blog posts or an error message was crucial for a good user experience.
