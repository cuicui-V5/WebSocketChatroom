# webSocketChatroom ws 聊天室

本项目为学习了 webSocket 的练习,

项目使用了 Vue3 + TypeScript 开发, 使用 Vite 作为构建工具, 状态管理使用了 Pinia . 使用 Vue-router 进行路由

后端服务器使用 Node.js + WS 模块, 前后端使用 WebSocket 进行实时通信

实现了一个基本的聊天室功能, 包括消息的发送与接收,  同时可以指定发送消息的用户名

‍2022-11-16

# 构建方法

1. `git clone` ​本项目
2. 依次进入 `backEnd ​` ​与 `frontEnd ​` ​文件夹内, 执行 `npm i`​
3. 运行服务端:

   1. `node ./index.js`​
4. 构建前端项目

   1. `npm run build`​ 注意: 你可能需要修改 `vite.config.ts`​ 中的 `base` ​配置项来适应你的服务器
   2. 放入服务器的 web 文件夹内
5. enjoy !

# [translate]webSocketChatroom ws chat room

This project is an exercise for learning webSocket,

The project is developed using Vue3 + TypeScript, Vite is used as a build tool, and Pinia is used for state management. Routing is done using Vue-router

The back-end server uses Node.js + WS module, and the front-end and back-end use WebSocket for real-time communication

Implemented a basic chat room function, including sending and receiving messages, and can specify the user name for sending messages

2022-11-16

# build

1. `git clone`​ this project
2. Go to `backEnd ​`​ and `frontEnd ​`​ folders in turn, execute `npm i`​
3. Run the server:

    1. `node ./index.js`​
4. Build the front-end project

    1. `npm run build`​ Note: You may need to modify the `base`​ configuration item in `vite.config.ts`​ to suit your server
    2. Put it in the web folder of the server
5. enjoy!
