<template>
    <div class="post">
        <div class="post__head">
            <div class="post__head-avatar"></div>
            <div class="post__head-info">
                <div class="author"><span>@{{post.author_username}}</span></div>
                <div class="social"><span>{{post.social_network}}</span></div>
            </div>
        </div>
        <div class="post__body">
            <div class="post__body-photo">
                <div class="info">
                    <img :src="post.social_network" alt="" width="100%">
                    <h3 class="post__subtitle">last photo with black hair</h3>
                    <h2 class="post__title">#thinkpink</h2>
                </div>

                <div class="hidden-info">
                    <span>{{post.caption}}</span>
                </div>
            </div>

            <div class="statistic">
                <div class="statistic__item">
                    <div class="statistic__item-label">likes</div>
                    <div class="statistic__item-data">{{post.likes_number}}</div>
                </div>
                <div class="statistic__item">
                    <div class="statistic__item-label">comments</div>
                    <div class="statistic__item-data">{{post.comments_number}}</div>
                </div>
            </div>
        </div>
        <div class="post__footer">
            <button class="link link_black" @click="hide">reject</button>
            <button class="link link_blue">approve</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        post: {
            type: Object
        }
    },
    methods: {
        hide () {
            this.$emit('hide', this.campaign.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.post {
    border-radius: 1px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px #b6b6b6;
    
    &:hover {
        .hidden-info {
            transform: translateY(0);
        }
    }

    &__head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px;
        font-size: 12px;
        text-align: left;
        border-bottom: 1px solid #eee;

        &-avatar {
            width: 35px;
            height: 35px;
            border-radius: 100%;
            background-color: #43a4ff;
        }

        &-info {
            margin-left: 10px;

            .author {
                margin-bottom: 3px;
                font-weight: 700;
            }

            .social {
                text-decoration: underline;
                color: #43a4ff;
                cursor: pointer;
            }
        }
    }

    &__body {
        &-photo {
            overflow: hidden;
            position: relative;
            display: flex;
            height: 270px;
            width: 100%;
            background-color: #43a4ff;

            .info {
                margin: auto 0;
                padding: 10px;
                text-transform: uppercase;
                color: #fff;
            }

            .hidden-info {
                box-sizing: border-box;
                overflow-y: auto;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 10px;
                word-break: break-all;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.5);
                transform: translateY(100%);
                transition: 180ms ease;
            }
        }

        .statistic {
            &__item {
                &-label {
                    color: #929292;
                }
            }
        }
    }

    &__subtitle {
        font-family: 'Open Sans Condensed', sans-serif;
        margin: 0 0 5px;
        font-size: 15px;
        font-weight: 300;
    }

    &__title {
        font-family: 'Open Sans Condensed', sans-serif;
        margin: 0;
        font-size: 37px;
        font-weight: 300;
    }

    &__footer {
        display: flex;
        justify-content: flex-start;
        padding: 12px;
        border-top: 1px solid #eee;

        .link {
            font-size: 12px;

            &:last-child {
                margin-left: 30px;
            }
        }
    }
}
</style>

