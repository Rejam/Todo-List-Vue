<template>
  <article>
    <input type="text" v-model='newTodo' @keyup.enter="addTodo">
    <button @click='addTodo'>Add</button>

    <ol>
      <li v-for='todo in todos' :key='todo.id'>
        {{todo.name}}
        <input type="checkbox" v-model='todo.complete' />
        <button @click='deleteTodo(todo.id)'>delete</button>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      newTodo: "",
      todos: []
    };
  },

  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodo,
        complete: false,
        id: this.count++
      });
      this.newTodo = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  }
};
</script>

<style>

</style>
