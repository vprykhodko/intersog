<template>
	<div class="posts">
		<div class="posts__head">
			{{$route.params.dataTransfer}}
		</div>

		<div class="posts__action">
			<div class="socials-list">
				<div class="socials-list__item"
				v-for="(item, index) in socials"
				:key="index"
				:class="{'active': item.active}"
				@click="filterPostsBySocial(item.name)">
					<span>{{item.name}}</span>
				</div>
			</div>

			<div class="status-tabs">
				<div class="status-tabs__item"
				v-for="(item, index) in statusTabs"
				:key="index"
				:class="{'active': item.active}"
				@click="changeActiveTab(item.name, statusTabs)">
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>

		<div class="posts__control">
			<div class="posts-total black-reg-12"><span>{{totalPosts}} items total</span></div>
			<div class="pagination">
				<div class="pagination__action pagination__item"><span>First</span></div>
				<div class="pagination__action pagination__item"><span>Prev</span></div>

				<div class="pagination__item"
				v-for="(item, index) in pages.count"
				:key="index"
				:class="{'active': pages.active==index}">
					<span>{{item}}</span>
				</div>

				<div class="pagination__item"><span>...</span></div>

				<div class="pagination__item"><span>957</span></div>
				<div class="pagination__item"><span>958</span></div>

				<div class="pagination__action pagination__item"><span>Next</span></div>
				<div class="pagination__action pagination__item"><span>Last</span></div>
			</div>
		</div>
			
		<div class="posts__list">
			<div v-for="(item, index) in postsVisible"
			:key="index"
			class="list__item">
				<Post :post="item" />
			</div>
		</div>
	</div>
</template>

<script>
import data from '../posts.json'
import Post from '../components/cards/Post'

export default {
	name: 'DetailsPage',
	components: {Post},
	data: () => ({
		postsList: data.media,
		totalPosts: data.count,
		currentSocialFilter: 'Instagram',
		socials: [
			{name: 'Instagram', active: true},
			{name: 'Youtube', active: false},
			{name: 'Facebook', active: false},
			{name: 'Twitter', active: false}
		],
		statusTabs: [
			{name: 'pending', active: true},
			{name: 'approved', active: false},
			{name: 'rejected', active: false}
		],
		pages: {
			count: 7,
			active: 0
		}
	}),
	methods: {
		changeActiveTab(newActive, array) {
			array.forEach(element => {
				element.active = element.name === newActive ? true : false
			});
		},
		filterPostsBySocial(newActive) {
			this.changeActiveTab(newActive, this.socials)
			this.currentSocialFilter = newActive
		}
	},
	computed: {
		postsVisible: {
			get () {
				let currentSocial = this.currentSocialFilter
				let array = this.postsList.filter(function(post) {
					return post.social_network === currentSocial
				})
				return array
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.posts {
	padding: 4px 5px;

	&__head {
		padding: 10px;
        border-bottom: 1px solid #e2e2e2;
        background-color: #fdfdfd;
	}

	&__action {
		margin-top: 10px;
		padding-bottom: 40px;
		background-color: #fff;
	}

	&__control {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 15px 10px 0;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 12px;
		padding: 10px;
	}
}

.socials-list {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 15px;

	&__item {
		padding: 7px;
		text-transform: uppercase;
		font-size: 12px;
		background-color: #fdfdfd;
		box-shadow: 0px 1px 2px 0px #dfdfdf;
		cursor: pointer;
		transition: 180ms ease;

		&.active {
			color: #fff;
			background-color: #43a4ff!important;
		}

		&:hover {
			background-color: #f5f5f5;
		}
	}
}

.status-tabs {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	border-bottom: 1px solid #eee;

	&__item {
		width: 100%;
		max-width: 200px;
		padding: 10px 0;
		text-align: center;
		text-transform: uppercase;
		font-size: 12px;
		color: #8a8a8a;
		border-bottom: 2px solid transparent;
		cursor: pointer;
		transition: 180ms ease;

		&.active {
			color: #43a4ff!important;
			border-color: #43a4ff;
		}

		&:hover {
			color: #000;
		}
	}
}
</style>
