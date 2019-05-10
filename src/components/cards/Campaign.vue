<template>
    <div class="campaign">
        <div class="campaign__head" :style="campaignStyle">
            <h3 class="title black-reg-18">{{campaign.name}}</h3>
            <div class="type grey-reg-12"><span>{{campaign.type}}</span></div>
        </div>
        <div class="campaign__body">
            <div class="statistic">
                <div class="statistic__item">
                    <div class="statistic__item-label">approved posts</div>
                    <div class="statistic__item-data">{{campaign.approved_posts}}</div>
                </div>
                <div class="statistic__item">
                    <div class="statistic__item-label">influencers</div>
                    <div class="statistic__item-data">{{campaign.num_of_artists}}</div>
                </div>
                <div class="statistic__item">
                    <div class="statistic__item-label">likes</div>
                    <div class="statistic__item-data">{{campaign.approved_likes}}</div>
                </div>
                <div class="statistic__item">
                    <div class="statistic__item-label">comments</div>
                    <div class="statistic__item-data">{{campaign.approved_comments}}</div>
                </div>
            </div>
            <div class="statistic_small"><span>{{progress}}</span></div>
        </div>
        <div class="campaign__footer">
            <button class="link link_black" @click="hide">hide</button>
            <button class="link link_blue" @click="$router.push({name: 'deatailsPage', params: {dataTransfer: campaign.name}})">show details</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Campaign',
    props: {
        campaign: {
            type: Object
        }
    },
    methods: {
        hide () {
            this.$emit('hide', this.campaign.id)
        }
    },
    computed: {
        progress () {
            return this.campaign.progress + '% (' + this.campaign.days_total + '/' + this.campaign.days_passed + ' days)'
        },
        campaignStyle () {
            switch (this.campaign.type) {
                case 'Challenge':
                    return 'border-top-color: #c78bd1'
                case 'Influencer campaign':
                    return 'border-top-color: #6e9be4'
                case 'Giveaway':
                    return 'border-top-color: #6287c2'
                default:
                    return 'border-top-color: #c78bd1'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.campaign {
    border-radius: 1px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px #b6b6b6;
    
    &__head {
        padding: 7px 12px;
        text-align: left;
        border-top-width: 3px;
        border-top-style: solid;
        border-bottom: 1px solid #e6e6e6;

        .title {
            margin: 0;
        }
    }

    &__body {
        .statistic {
            grid-template-rows: 1fr 1fr;
        }
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        padding: 12px;
        border-top: 3px solid #46cfbb;
    }
}

.link {
    font-size: 12px;
}
</style>

