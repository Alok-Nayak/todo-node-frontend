// frontend-repo/public/app.js

document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});

async function loadTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    const response = await fetch(`${process.env.ELASTIC_BEANSTALK_ENDPOINT}/api/todos`);
    const todos = await response.json();

    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${todo.task}</span>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled>
      `;
        todoList.appendChild(listItem);
    });
}

async function addTodo() {
    const newTodoInput = document.getElementById('newTodo');
    const newTodo = newTodoInput.value;

    if (newTodo.trim() !== '') {
        await fetch(`${process.env.ELASTIC_BEANSTALK_ENDPOINT}/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: newTodo,
                completed: false
            }),
        });

        newTodoInput.value = '';
        loadTodos();
    }
}