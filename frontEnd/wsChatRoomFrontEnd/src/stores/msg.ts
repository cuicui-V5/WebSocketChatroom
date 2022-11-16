import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

interface msgObj {
    name: string;
    content: string;
    time: string;
}

export const useMsgStore = defineStore("msg", () => {
    const msgs: Ref<msgObj[]> = ref([]);
    const readyStatus = ref("连接中...");
    let ws: WebSocket;
    function openWS() {
        ws = new WebSocket("ws://127.0.0.1:1234");
        ws.addEventListener("open", () => {
            console.log("ws connect is open ");
            readyStatus.value = "已连接websocket服务器";
        });
        ws.addEventListener("message", ({ data }) => {
            data = JSON.parse(data);
            console.log(data);
            msgs.value = data;
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
    return { msgs, readyStatus, wsHandler, reConnect };
});