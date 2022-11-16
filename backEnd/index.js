import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 1234 });

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

ws.on("connection", (socket) => {
    socket.send(JSON.stringify(dataObj));
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        console.log(packet);
        dataObj.msgs.push(packet);
        dataObj.msgCount = dataObj.msgs.length;
        console.log(dataObj);
        // 收到消息之后发起广播
        boardCast();
    });
});

const boardCast = () => {
    dataObj.onlineUser = ws.clients.size;
    ws.clients.forEach((client) => {
        client.send(JSON.stringify(dataObj));
    });
};
