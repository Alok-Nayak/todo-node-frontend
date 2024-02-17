// frontend-repo/src/app.js

// Assuming REACT_APP_API_URL is the environment variable you want to use
const apiUrl = process.env.BACKEND_URL || '';

const fetchTodos = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/todos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const todos = await response.json();
        console.log('Todos:', todos);

        // Example: Update your UI with the fetched todos
        // ...

    } catch (error) {
        console.error('Error fetching todos:', error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
};

const addTodo = async (newTodo) => {
    try {
        const response = await fetch(`${apiUrl}/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task: newTodo, completed: false }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const addedTodo = await response.json();
        console.log('Added Todo:', addedTodo);

        // Example: Update your UI to reflect the added todo
        // ...

    } catch (error) {
        console.error('Error adding todo:', error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
};
