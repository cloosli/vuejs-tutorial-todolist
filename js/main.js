var TodoComponent = Vue.extend({
    data: function() {
        return {
            inEditMode: false
        };
    },
    props: ['todo'],
    template: '<div><span v-on:click="clicked" v-show="!inEditMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-show="inEditMode" v-model="todo.title"/></div>',
    methods: {
        clicked: function() {
            this.inEditMode = true;
        },
        saved: function() {
            this.inEditMode = false;
        }
    }
});

Vue.component('todo-component', TodoComponent);

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
