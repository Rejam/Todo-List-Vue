<template>
	<div>
		<h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/Hello">Hello</router-link>

	</div>
</template>

<script>
export default {
  name: "goodbye",
  data() {
    return {
      msg: "Goodbye"
    };
  }
};
</script>

<!-- scoped: limit CSS to this component -->
<style scoped>

</style>