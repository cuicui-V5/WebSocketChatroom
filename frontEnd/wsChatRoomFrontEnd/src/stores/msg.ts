// 状态管理使用vue官方推荐的pinia
import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

// 定义数据类型接口
interface msgObj {
    name: string;
    content: string;
    time: string;
}

export const useMsgStore = defineStore("msg", () => {
    // 定义一系列数据
    // 存放所有的聊天记录
    const msgs: Ref<msgObj[]> = ref([]);
    // 在线人数
    const onlineUser = ref(0);
    // 聊天记录计数
    const msgCount = ref(0);
    // 服务器状态
    const readyStatus = ref("连接中...");

    //ws要定义在外边, 方便其他函数使用, 例如读取 readyState
    let ws: WebSocket;
    // const url = "ws://127.0.0.1:1234";
    const url = "ws://180.76.112.86:1234";
    // 建立连接的函数
    function openWS() {
        ws = new WebSocket(url);

        ws.addEventListener("open", () => {
            console.log("ws connect is open ");
            readyStatus.value = `已连接websocket服务器`;
        });

        // 收到消息的回调
        ws.addEventListener("message", ({ data }) => {
            data = JSON.parse(data);
            console.log("======收到消息=====");
            console.log(data);

            // 将接收到的数据进行赋值
            msgs.value = data.msgs;
            onlineUser.value = data.onlineUser;
            msgCount.value = data.msgCount;
        });

        // 关闭连接时的提示
        ws.addEventListener("close", () => {
            readyStatus.value = "已从websocket服务器断开连接";
        });
    }
    openWS();

    // 发送信息的处理函数, 先判断连接是否打开, 然后再发送
    function wsHandler(msgObj: msgObj): void {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify(msgObj));
        } else {
            alert(ws.readyState);
        }
    }

    // 单击按钮手动进行重新连接
    function reConnect() {
        readyStatus.value = "重新连接中...";
        openWS();
    }
    return { msgs, readyStatus, onlineUser, msgCount, wsHandler, reConnect };
});
