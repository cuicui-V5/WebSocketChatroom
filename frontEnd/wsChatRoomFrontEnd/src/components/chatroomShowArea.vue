<template>
    <div
        class="show"
        ref="showArea"
    >
        <div
            v-for="msg in msgs"
            class="items"
        >
            <span class="title">{{ msg.name }} {{ msg.time }} :</span>
            <p class="content">{{ msg.content }}</p>
        </div>
        <!-- 列表熏染 -->
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useMsgStore } from "../stores/msg";
    import { ref, onUpdated, type Ref } from "vue";

    // 向外暴露store中的属性
    const store = useMsgStore();
    const { msgs } = storeToRefs(store);

    // Vue3中的ref引用模板的用法: 使用一个和模板中同名的ref属性
    const showArea: Ref<HTMLInputElement | null> = ref(null);

    onUpdated(() => {
        // 每当列表重新渲染(有新的聊天记录)时, 滚动到列表最底端
        showArea.value?.scroll({
            top: showArea.value.scrollHeight,
            // 采用平滑滚动
            behavior: "smooth",
        });
    });
</script>

<style lang="less" scoped>
    .show {
        padding: 20px;
        text-align: left;
        height: 400px;
        margin: 5px;
        border: black solid 2px;
        overflow-y: scroll;
        .title {
            color: green;
        }
        .content {
            margin: 4px;
            font-size: 22px;
            border-bottom: black solid 1px;
        }
        .items:hover {
            background-color: gainsboro;
        }
    }
</style>
