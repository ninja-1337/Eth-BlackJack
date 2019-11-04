class Controller {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Display initial todos
        this.onTodoListChanged(this.model.todos)
    }

    onTodoListChanged = todos => {
        this.view.displayTodos(todos);
    }

    handleAddTodo = todoText => {
        this.model.addTodo(todoText);
    }

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText);
    }

    handleDeleteTodo = id => {
        this.model.deleteTodo(id);
    }

    handleToggleTodo = id => {
        this.model.toggleTodo(id);
    }

    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            if (this._todoText) {
                handler(this._todoText);
                this._resetInput()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);

                handler(id)
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);

                handler(id)
            }
        })
    }




}