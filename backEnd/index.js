import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 1234 });

const msgs = [
    {
        name: "tim1",
        content: "hi",
        time: "Wed Nov 16 2022 17:40:41 GMT+0800 (中国标准时间)",
    },
];

ws.on("connection", (socket) => {
    socket.send(JSON.stringify(msgs));
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        console.log(packet);
        msgs.push(packet);
        console.log(msgs);
        // 收到消息之后发起广播
        boardCast();
    });
});

const boardCast = () => {
    ws.clients.forEach((client) => {
        client.send(JSON.stringify(msgs));
    });
};
