<template>
	<div class="dashboard">
		<div class="dashboard__list">
			{{$route.params.dataTransfer}}
		</div>
	</div>
</template>

<script>
import data from '../posts.json'
export default {
	name: 'DetailsPage',
	data: () => ({
		media: data.media
	})
}
</script>

<style lang="scss" scoped>

</style>

