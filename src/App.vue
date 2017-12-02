<template>
	<div id="app">
		<app-header />
		<app-main />
		<app-footer />
	</div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  components: {
    "app-header": Header,
    "app-main": Main,
    "app-footer": Footer
  }
};
</script>

<style>

</style>