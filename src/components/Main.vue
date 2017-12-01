<template>
  <article>
    <input type="text" v-model='newTodo'><button @click='addTodo'>Add</button>
    <ol>
      <li v-for='todo in todos' :key="todo.index">
        {{todo.name}}
        <input type="checkbox" :checked='todo.complete'/>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  data: function() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodo,
        complete: false
      });
      this.newTodo = "";
    }
  }
};
</script>

<style>

</style>
