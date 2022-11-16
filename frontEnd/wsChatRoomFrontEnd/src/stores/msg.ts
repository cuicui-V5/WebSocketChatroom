import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

interface msgObj {
    name: string;
    content: string;
    time: string;
}

export const useMsgStore = defineStore("msg", () => {
    const msgs: Ref<msgObj[]> = ref([]);
    const onlineUser = ref(0);
    const msgCount = ref(0);
    const readyStatus = ref("连接中...");
    let ws: WebSocket;
    const url = "ws://127.0.0.1:1234";
    // const url = "ws://180.76.112.86:1234";
    function openWS() {
        ws = new WebSocket(url);
        ws.addEventListener("open", () => {
            console.log("ws connect is open ");
            readyStatus.value = `已连接websocket服务器`;
        });
        ws.addEventListener("message", ({ data }) => {
            data = JSON.parse(data);
            console.log("======收到消息=====");
            console.log(data);

            msgs.value = data.msgs;
            onlineUser.value = data.onlineUser;
            msgCount.value = data.msgCount;
        });
        ws.addEventListener("close", () => {
            readyStatus.value = "已从websocket服务器断开连接";
        });
    }
    openWS();
    function wsHandler(msgObj: msgObj): void {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify(msgObj));
        } else {
            alert(ws.readyState);
        }
    }
    function reConnect() {
        readyStatus.value = "重新连接中...";
        openWS();
    }
    return { msgs, readyStatus, onlineUser, msgCount, wsHandler, reConnect };
});
