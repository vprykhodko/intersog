<template>
	<div class="dashboard">
		<div class="dashboard__list">
			<div v-for="(item, index) in campaigns"
			:key="index">
				<Campaign :campaign="item" />
			</div>
		</div>
	</div>
</template>

<script>
import data from '../dashboard.json'
import Campaign from '../components/cards/Campaign'

export default {
	name: 'Dashboard',
	components: {Campaign},
	data: () => ({
		campaigns: data.campaigns
	})
}
</script>

<style lang="scss" scoped>
.dashboard__list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
}
</style>

