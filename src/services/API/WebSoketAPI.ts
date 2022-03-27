export class WebSockeAPI {
  socket: WebSocket;
  constructor(socket: WebSocket, getMessages: Function) {
    this.sendMessage = this.sendMessage.bind(this);
    this.sendPing = this.sendPing.bind(this);
    this.closeWS = this.closeWS.bind(this);
    this.getOldMessages = this.getOldMessages.bind(this);

    this.socket = socket;

    this.socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      this.getOldMessages();
      this.sendPing();
    });

    this.socket.addEventListener("close", (event) => {
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
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

  getOldMessages() {
    this.socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  }
}
