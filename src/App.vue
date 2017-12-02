<template>
	<div id="app">
		<app-header />
		<app-main />
	</div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  components: {
    "app-header": Header,
    "app-main": Main
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>