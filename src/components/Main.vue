<template>
  <article>
    <input type="text" 
    placeholder='Enter todo' 
    v-model='newTodo' 
    @keyup.enter="addTodo">
    <button @click='addTodo'>Add Todo</button>

    <ol>
      <li v-for='todo in todos' :key='todo.id'>

        <div v-if='todo == currrentlyEditing'>
          <input type="text" v-model='currrentlyEditing.name'> <br>
          <button @click='saveEdit'>
            Save</button>
          <button @click='currrentlyEditing = null' >
            Cancel</button>
        </div>

        <div v-else>
        <span @click='todo.complete = !todo.complete' :class='{complete: todo.complete}'>
          {{todo.name}}</span><br>
        <button @click='currrentlyEditing = todo'>
          Edit</button>
        <button @click='deleteTodo(todo.id)'>
          Delete</button>
        </div>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  data() {
    return {
      currrentlyEditing: null,
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
    },
    saveEdit() {
      this.todos.filter(todo => {
        if (todo.id == this.currrentlyEditing.id) {
          return this.currrentlyEditing;
        }
        return todo;
      });
      this.currrentlyEditing = null;
    }
  }
};
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
ol {
  padding-left: 0;
}
li {
  display: flex;
  line-height: 1.5em;
}
input,
span {
  width: 200px;
}
span {
  display: inline-block;
  cursor: pointer;
}
button {
  width: 100px;
  background: transparent;
  border: 1px solid black;
}
</style>
