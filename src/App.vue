<template>
	<div id="app">
		<div class="grid">
			<div class="grid__head">
				<router-link to="/">Dashboard</router-link>
			</div>
			<div class="grid__body">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" src="./assets/css/index.scss"></style>
