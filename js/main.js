new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todoText: '',
        todos: [{
            title: 'Learn Vue.js'
        }, {
            title: 'Learn Go'
        }, {
            title: 'Learn RethinkDB'
        }, {
            title: 'Build something awesome'
        }],
        showTodos: true
    },
    methods: {
        createTodo: function() {
            var todoText = this.todoText.trim();
            if (todoText) {
                this.todos.push({
                    title: todoText
                });
                this.todoText = '';
            }
        },
        clearTodo: function() {
            this.todoText = '';
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }

})
