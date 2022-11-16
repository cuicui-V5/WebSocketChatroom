<template>
    <div class="app">
        <h1 class="title">{{ msg }}</h1>
        <div class="linkBox">
            <RouterLink
                class="link"
                :to="{
                    name: 'home',
                }"
            >
                home
            </RouterLink>

            <RouterLink
                class="link"
                to="about"
            >
                about
            </RouterLink>
        </div>
        <!-- 主容器路由切换区域 -->
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const msg = ref("welcome to my chatroom");
</script>
<style lang="less" scoped>
    .app {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        .title {
            font-weight: bold;
        }
        .linkBox {
            position: absolute;
            left: 0;
            top: 50%;
            .link {
                margin: 10px;
                display: block;
                height: 50px;
                width: 50px;
                line-height: 50px;
                border-radius: 30%;
                background-color: skyblue;
                &:last-child {
                    background-color: orange;
                }
            }
        }
    }
</style>
