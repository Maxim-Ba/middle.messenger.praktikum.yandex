export class ModalWindow {
  constructor(modalWindowEl) {
    this.modalWindowEl = modalWindowEl;

    this.hideWindow = this.hideWindow.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);
    this.bindActionsOnButton = this.bindActionsOnButton.bind(this);
    this.modalWindowWrapperEl = document.querySelector(
      ".modal-window__wrapper",
    );
    this.modalWindowEl.addEventListener("click", this.hideWindow);
  }

  hideWindow(event) {
    if (event.target === this.modalWindowWrapperEl) {
      this.modalWindowEl.classList.toggle("display-none");
    }
  }
  openModalWindow() {
    this.modalWindowEl.classList.toggle("display-none");

    // switch (event.currentTarget) {
    //   case this.createChatEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.deleteChatEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.changeAvatarEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.addUserEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.deleteUserEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.sendFotoEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.sendFileEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   case this.sendLocationEl:
    //     this.modalWindowEl.classList.toggle("display-none");
    //     break;
    //   default:
    //     break;
    // }
  }
  bindActionsOnButton(buttonEl, action) {
    const containers = this.modalWindowEl.querySelectorAll(
      ".modal-window__container",
    );
    switch (action) {
      case "AVATAR_PROFILE":
        const targetToVisible = document.getElementById(
          "modal-window-upload-pic-profile",
        );
        containers.forEach((container) => {
          if (!container.classList.contains("display-none")) {
            container.classList.add("display-none");
          }
        });
        targetToVisible.classList.remove("display-none");

        break;
      default:
        const target = document.getElementById("modal-window-delete-chat");
        containers.forEach((container) => {
          if (!container.classList.contains("display-none")) {
            container.classList.add("display-none");
          }
        });
        target.classList.remove("display-none");
        break;
    }
    buttonEl.addEventListener("click", this.openModalWindow);
  }
}
