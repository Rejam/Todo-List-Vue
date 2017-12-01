<template>
	<div>
    <router-link to="/">Home</router-link>
    <router-link to="/Goodbye">Goodbye</router-link>
	</div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      msg: "Todo"
    };
  }
};
</script>

<!-- scoped: limit CSS to this component -->
<style scoped>

</style>