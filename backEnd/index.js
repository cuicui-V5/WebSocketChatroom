import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 1234 });

const msgs = [
    {
        name: "tim1",
        content: "hi",
        time: "12:12",
    },
    {
        name: "tim2",
        content: "hi1",
        time: "12:12",
    },
];

ws.on("connection", (socket) => {
    socket.send(JSON.stringify(msgs));
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        console.log(packet);
        msgs.push(packet);
        console.log(msgs);
        socket.send(JSON.stringify(msgs));
    });
});
