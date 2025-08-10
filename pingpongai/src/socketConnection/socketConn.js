import { io } from 'socket.io-client';

let socket;

export const connectionWithSocketServer = () => {
    socket = io("http://localhost:5000");

    socket.on('connect', () => {
        console.log("connected with socket.io server");
        console.log(socket.id);
    })
};

export const sendConversationMessage = (message, conversationId) => {
    socket.emit("conversation-message", {
        message,
        conversationId,
    })
};