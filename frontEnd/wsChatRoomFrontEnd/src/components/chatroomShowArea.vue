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
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useMsgStore } from "../stores/msg";
    import { ref, onUpdated, type Ref } from "vue";
    const store = useMsgStore();
    const { msgs } = storeToRefs(store);

    const showArea: Ref<HTMLInputElement | null> = ref(null);
    onUpdated(() => {
        showArea.value?.scroll({
            top: showArea.value.scrollHeight,
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
        overflow: scroll;
        .title {
            color: green;
        }
        .content {
            font-size: 26px;
            border-bottom: black solid 1px;
        }
        .items:hover {
            background-color: gainsboro;
        }
    }
</style>
