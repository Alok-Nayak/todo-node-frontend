// frontend-repo/src/app.js

const fetchTodos = async () => {
    try {
      //const response = await fetch(`${process.env.REACT_APP_ELASTIC_BEANSTALK_ENDPOINT}/api/todos`, {
      const response = await fetch(`http://todo-app-env.eba-ezjkxapy.ap-south-1.elasticbeanstalk.com/api/todos`, {

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
      const response = await fetch(`http://todo-app-env.eba-ezjkxapy.ap-south-1.elasticbeanstalk.com/api/todos`, {
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
  
  // Trigger the fetchTodos function
  fetchTodos();
  
  // Trigger the addTodo function
  // Replace 'New Todo Task' with the actual task you want to add
  addTodo('New Todo Task');
  