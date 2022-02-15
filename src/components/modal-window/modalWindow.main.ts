export class ModalWindow {
  modalWindowWrapperEl: any;
  modalWindowEl: any;
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
        targetToVisible?.classList.remove("display-none");

        break;
      default:
        const target = document.getElementById("modal-window-delete-chat");
        containers.forEach((container) => {
          if (!container.classList.contains("display-none")) {
            container.classList.add("display-none");
          }
        });
        target?.classList.remove("display-none");
        break;
    }
    buttonEl.addEventListener("click", this.openModalWindow);
  }
}
