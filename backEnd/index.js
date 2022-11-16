/*
    webSocket聊天室服务端程序, 使用ws模块实现
**/

// 使用ws模块
import { WebSocketServer } from "ws";
// 创建wss实例
const wss = new WebSocketServer({ port: 1234 });
// 定义数据结构
const dataObj = {
    msgs: [
        {
            name: "tim1",
            content: "hi",
            time: "Wed Nov 16 2022 17:40:41 GMT+0800 (中国标准时间)",
        },
    ],
    onlineUser: 0,
    msgCount: 0,
};
// 监听 connection 事件, 每连接一个客户端,  回调函数会传入一个socket实例
wss.on("connection", (socket) => {
    // 每当有新客户端接入时, 发送当前的数据;
    socket.send(JSON.stringify(dataObj));
    // 当收到消息时进行处理
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        console.log(packet);
        // 将收到的数据存入聊天记录对象
        dataObj.msgs.push(packet);
        // 如果聊天记录过长, 就进行删除, 使其不会超过100
        if (dataObj.msgs.length >= 100) {
            dataObj.msgs.shift();
        }

        console.log(dataObj);
        // 收到消息之后发起广播
        boardCast();
    });
});

// 广播函数
const boardCast = () => {
    // 给消息技术和在线人数计数
    dataObj.msgCount = dataObj.msgs.length;
    dataObj.onlineUser = wss.clients.size;
    // 遍历所有客户端, 实现广播消息
    wss.clients.forEach((client) => {
        client.send(JSON.stringify(dataObj));
    });
};
