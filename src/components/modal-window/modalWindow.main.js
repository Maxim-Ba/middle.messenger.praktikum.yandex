export class ModalWindow {
  constructor(
    modalWindowEl,
    createChatEl,
    deleteChatEl,
    changeAvatarEl,
    addUserEl,
    deleteUserEl,
    sendFotoEl,
    sendFileEl,
    sendLocationEl,
  ) {
    this.modalWindowEl = modalWindowEl;
    this.createChatEl = createChatEl;
    this.deleteChatEl = deleteChatEl;
    this.changeAvatarEl = changeAvatarEl;
    this.addUserEl = addUserEl;
    this.deleteUserEl = deleteUserEl;
    this.sendFotoEl = sendFotoEl;
    this.sendFileEl = sendFileEl;
    this.sendLocationEl = sendLocationEl;

    this.hideWindow = this.hideWindow.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);

    this.modalWindowWrapperEl = document.querySelector(
      ".modal-window__wrapper",
    );
    this.modalWindowEl.addEventListener("click", this.hideWindow);
    this.createChatEl.addEventListener("click", this.openModalWindow);
    this.deleteChatEl.addEventListener("click", this.openModalWindow);
    this.changeAvatarEl.addEventListener("click", this.openModalWindow);
    this.addUserEl.addEventListener("click", this.openModalWindow);
    this.deleteUserEl.addEventListener("click", this.openModalWindow);
    this.sendFotoEl.addEventListener("click", this.openModalWindow);
    this.sendFileEl.addEventListener("click", this.openModalWindow);
    this.sendLocationEl.addEventListener("click", this.openModalWindow);
  }

  hideWindow(event) {
    if (event.target === this.modalWindowWrapperEl) {
      this.modalWindowEl.classList.toggle("display-none");
    }
  }
  openModalWindow(event) {
    console.log(event.currentTarget);
    switch (event.currentTarget) {
      case this.createChatEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.deleteChatEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.changeAvatarEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.addUserEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.deleteUserEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.sendFotoEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.sendFileEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      case this.sendLocationEl:
        this.modalWindowEl.classList.toggle("display-none");
        break;
      default:
        break;
    }
  }
}
