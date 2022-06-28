import { io } from "socket.io-client";

const socket = io("ws://yemek.alitechbot.uz", { transports: ["websocket"] });
export default socket;
