<template>
	<div class="dashboard">
		<div class="dashboard__list">
			<div v-for="(item, index) in campaigns"
			:key="index">
				<Campaign :campaign="item" />
			</div>
			<div class="more">
				<span class="more__count">+5</span>
				<span class="more__label">more to show</span>
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
.dashboard {
	padding: 5px 5px 20px;

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 12px;
	}

	.more {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #929292;
		cursor: pointer;
		transition: 180m ease;

		&:hover {
			background-color: #fff;
		}
		
		&__count {
			margin-bottom: 5px;
			font-size: 32px;
		}

		&__label {
			text-transform: uppercase;
			font-size: 16px;
		}
	}
}
</style>

