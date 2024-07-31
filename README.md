# Todo List Application

## Overview
This Todo List Application is a frontend project built using React.js. The application allows users to manage their tasks efficiently with features like creating, updating, marking tasks as done, and searching tasks. The tasks are displayed in an expandable list format with descriptions and timestamps of the last update.

## Features
- **Create Task**: Add new tasks to the list.
- **Update Task**: Edit existing tasks.
- **Mark as Done**: Mark tasks as completed.
- **Search Tasks**: Filter tasks using the search functionality.
- **Expandable List**: Expand tasks to view descriptions and last update timestamps.

## System Design
The application follows a modular and component-based architecture. The main components include:
- **App**: The root component that initializes the application.
- **TaskList**: Displays the list of tasks.
- **TaskEditor**: Form for creating and updating tasks.

## Implementation
- **React**: Utilized for building the user interface.
- **State Management**: Managed using React's `useState` and `useEffect` hooks.
- **Data Storage**: Dummy JSON file used as a data repository.
- **Styling**: CSS for styling.

## Setup and Run Instructions
1. Clone the Repository:
   ```sh
   git clone https://github.com/AbhinavRai2004/TodoList.git
   ```

2. Navigate to the project directory:
   ```sh
   cd TodoList
   ```

3. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Run the application
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```plaintext
TodoList/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   └── TaskEditor.js
│   ├── utils/
│   │   └── tasks.js
│   ├── images/
│   │   └── todo.png
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```
