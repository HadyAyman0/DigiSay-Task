# React + Vite

# Todo List App

## Description
This is a simple Todo List application built using React. The app allows users to add, remove, and mark tasks as completed. The project leverages modern web technologies and libraries to provide a smooth and responsive user experience.

## Technologies Used

### 1. **React with (Vite)**
### 2. **Redux (State mangment for Shared Data)**
### 3. **Material UI (for styling)**
### 5. **Tailwind CSS (for styling)**
### 6. **Formik (Forms)**
### 7. **Yup (Validition)**
### 8. **React Awesome Reveal (for animations)  **
### 9. **JSON Server (for local data hosting ) (npx json-server --watch db.json --port 5001 ) **


## Features
- **Add Tasks:** Users can add new tasks to the list.
- **Remove Tasks:** Users can remove tasks from the list.
- **Mark Tasks as Completed:** Users can mark tasks as completed or not completed.
- **Responsive Design:** The application is designed to be responsive and works well on different devices.


### Design Decisions:
1. **State Management:**
   - Decided to use Redux for state management because it allows for better scalability and separation of concerns.
   - Used `createAsyncThunk` to handle asynchronous operations like fetching and deleting tasks from the mock API.

2. **Optimization:**
   - Utilized `useMemo` to memoize the `todoItems` array to prevent unnecessary re-renders.
   - Used `useEffect` to fetch tasks when the component mounts, ensuring data is loaded properly.

3. **Component Structure:**
   - Divided the application into small, reusable components (`Home`, `TodoItem`, `Modal`) to keep the code modular and maintainable.


### Code Review and Improvements:
1. **Code Structure:**
   - The components are well-organized and follow React best practices.
   - Consider using PropTypes to enforce type-checking for component props.

2. **State Management:**
   - The use of Redux for state management is appropriate, but make sure to handle the state update correctly after adding a task.
   - Convert the `completed` field to boolean instead of using strings "true" and "false".

3. **Optimization:**
   - Good use of `useMemo` to optimize performance. Ensure other parts of the code are also optimized similarly.