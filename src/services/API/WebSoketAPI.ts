export class WebSockeAPI {
  socket: WebSocket;
  constructor(
    socket: WebSocket,
    getMessages: Function
    //add callBacks
  ) {
    this.sendMessage = this.sendMessage.bind(this);
    this.sendPing = this.sendPing.bind(this);
    this.closeWS = this.closeWS.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.getOldMessages = this.getOldMessages.bind(this);

    this.socket = socket;

    this.socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      this.getOldMessages();
      this.sendPing();
    });

    this.socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      console.log("--Получены данные", data);
      console.log("--typeof", typeof data);
      switch (event.type) {
        case "message":
          if (data.type === "pong") {
            break;
          }
          if (Array.isArray(data)) {
            getMessages(data);
          } else {
            getMessages([data]);
          }
          break;
        case "file":
          break;

          break;
        default:
          break;
      }
    });

    this.socket.addEventListener("error", (event: ErrorEvent) => {
      console.log("Ошибка", event.message);
    });
  }
  sendMessage(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );
  }
  sendPing() {
    if (this.socket.readyState !== WebSocket.CLOSED) {
      this.socket.send(
        JSON.stringify({
          type: "ping",
        })
      );
      setTimeout(this.sendPing, 5000);
    }
  }
  closeWS() {
    this.socket.close(1000, "close on client");
  }
  onMessage() {}

  getOldMessages() {
    this.socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  }
}
