<template>
	<div class="dashboard">
		<div class="dashboard__list">
			<div v-for="(item, index) in campaignsVisible"
			:key="index"
			class="dashboard__list-item">
				<Campaign :campaign="item" @hide="hide" />
			</div>
			<div class="more" v-if="campaignsLeft">
				<span class="more__count">+ {{campaignsLeft}}</span>
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
		campaignsList: data.campaigns,
		campaignsCount: 7
	}),
	methods: {
        hide (value) {
            this.campaignsVisible = value
        }
    },
	computed: {
		campaignsVisible: {
			get () {
				let array = this.campaignsList

				if (array.length <= 7) {
					this.campaignCount = array.length
				} else {
					this.campaignCount = 7
				}

				return array.slice(0, this.campaignCount)
			},
			set (id) {
				this.campaignsList = this.campaignsList.filter(function(campaign) {
					return campaign.id !== id
				})
			}
		},
		campaignsLeft: {
			get () {
				let array = this.campaignsList

				if (array.length - this.campaignsCount < 7 && array.length - this.campaignsCount > 0) {
					return array.length - this.campaignsCount
				} if (array.length - this.campaignsCount <= 0) {
					return 0
				} else {
					return 7
				}
			}
		}
	}
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

