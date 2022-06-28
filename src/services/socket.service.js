import { io } from "socket.io-client";

// wss or https
const socket = io("wss://yemek.alitechbot.uz", { transports: ["websocket"] });
export default socket;
