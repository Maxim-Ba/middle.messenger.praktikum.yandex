import chatsController from "../../controllers/ChatsController";
import ProfileController from "../../controllers/ProfileController";
import { Block } from "../../modules/Block/Block";
import { IModalWindow } from "../../modules/Store/StoreTypes";

export class ModalWindowBlock extends Block<IModalWindow> {
  constructor(props: IModalWindow) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (
            event.target ===
            this.getContent().querySelector("#modal-window__wrapper")
          ) {
            chatsController.closeWindow();
            ProfileController.closeWindow();
          }
        },
        submit: (event: Event) => {
          event.preventDefault();
          switch (event.target) {
          case this.getContent().querySelector(
            "#modal-window-form-create-chat"
          ): {
            const form = this.getContent().querySelector(
              "#modal-window-form-create-chat"
            );
            const formData = new FormData(form as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            if (typeof data["title"] === "string") {
              chatsController.createChat({ title: data["title"] });
            }

            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-delete-chat"
          ): {
            chatsController.deleteChats();
            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-pic-profile"
          ): {
            const formAvatar = this.getContent().querySelector(
              "#modal-window-form-pic-profile"
            );
            const formAvatarData = new FormData(
                formAvatar as HTMLFormElement
            );
            ProfileController.changeUserAvatar(formAvatarData);
            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-pic-chat"
          ): {
            const formChatPic = this.getContent().querySelector(
              "#modal-window-form-pic-chat"
            );
            const formChatPicData = new FormData(
                formChatPic as HTMLFormElement
            );

            chatsController.uploadAvatar(formChatPicData);
            break;
          }
          case this.getContent().querySelector(
            "modal-window-form-add-user"
          ): {
            const formAddUser = this.getContent().querySelector(
              "#modal-window-form-add-user"
            );
            const formDataAddUser = new FormData(
                formAddUser as HTMLFormElement
            );
            chatsController.addUsers(
                formDataAddUser.get("add-user") as string
            );
            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-delete-user"
          ): {
            const formDeleteUser = this.getContent().querySelector(
              "#modal-window-form-delete-user"
            );
            const formDataDeleteUser = new FormData(
                formDeleteUser as HTMLFormElement
            );
            chatsController.deleteUsers(
                formDataDeleteUser.get("delete-user") as string
            );
            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-send-location"
          ): {
            break;
          }
          case this.getContent().querySelector("#modal-window-form-file"): {
            break;
          }
          case this.getContent().querySelector(
            "#modal-window-form-foto-or-video"
          ): {
            break;
          }
          default:
            break;
          }
        },
      },
    });
  }
  static get componentName() {
    return "ModalWindowBlock";
  }
  render() {
    return `
    <section class="modal-window ${
  this.props.isOpenWindow ? "" : "display-none"
} " 
      id="modal-window">
      <div id="modal-window__wrapper" class="modal-window__wrapper"></div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.create ? "" : "display-none"
}"
        id="modal-window-create-chat"
      >
        <p class="modal-window__title">?????????????? ??????</p>
        <form class="modal-window__form" id="modal-window-form-create-chat">
          <label class="modal-window__label" for="title">???????????????? ????????</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="title"
            placeholder="????????????????"
            id="title"
          />
          <div class="modal-window__btns">
            {{{ButtonClose}}}
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ?????????????? ??????
            </button>
          </div>
          <p class="modal-window__warning  ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.delete ? "" : "display-none"
}"
        id="modal-window-delete-chat"
      >
        <p class="modal-window__title">?????????????? ??????</p>
        <form class="modal-window__form" id="modal-window-form-delete-chat">
          <div class="modal-window__btns">
            {{{ButtonClose}}}
            <button
              type="submit"
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
            >
              ?????????????? ??????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "vissible-hidden"
}">{{reason}}</p>
        </form>
      </div>
      <div class="modal-window__container ${
  this.props.modalWindow.changeAva ? "" : "display-none"
}" id="modal-window-upload-pic-profile">
        <p class="modal-window__title">?????????????????? ????????</p>
        <form class="modal-window__form" id="modal-window-form-pic-profile">
          <label
            class="modal-window__label_f-loaded"
            for="avatar "
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="avatar">?????????????? ???????? ????
            ????????????????????</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="avatar"
            id="avatar"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ????????????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "vissible-hidden"
}">{{reason}}</p>
        </form>
      </div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.change ? "" : "display-none"
}"
        id="modal-window-upload-pic-chat"
      >
        <p class="modal-window__title">???????????????? ???????????? ????????</p>
        <form class="modal-window__form" id="modal-window-form-pic-chat">
          <label
            class="modal-window__label_f-loaded"
            for="pic-chat"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="avatar-chat">?????????????? ???????? ????
            ????????????????????</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="avatar-chat"
            id="avatar-chat"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ????????????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
      <div class="modal-window__container ${
  this.props.modalWindow.addUser ? "" : "display-none"
}" id="modal-window-add-user">
        <p class="modal-window__title">???????????????? ????????????????????????</p>
        <form class="modal-window__form" id="modal-window-form-add-user">
          <label class="modal-window__label" for="add-user">?????????? ????????????????????????</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="add-user"
            id="add-user"
            placeholder="?????????? ????????????????????????"
          />
          <div class="modal-window__btns">
          
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ????????????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.deleteUser ? "" : "display-none"
}"
        id="modal-window-delete-user"
      >
        <p class="modal-window__title">?????????????? ????????????????????????</p>
        <form class="modal-window__form" id="modal-window-form-delete-user">
          <label class="modal-window__label" for="delete-user">?????????? ????????????????????????</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="delete-user"
            placeholder="?????????? ????????????????????????"
            id="delete-user"
          />
          <div class="modal-window__btns">
            
            {{{ButtonClose}}}
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ??????????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>

      <div
        class="modal-window__container ${
  this.props.modalWindow.location ? "" : "display-none"
}"
        id="modal-window-send-location"
      >
        <p class="modal-window__title">???????????????????? ??????????????</p>
        <form class="modal-window__form" id="modal-window-form-send-location">
          <label
            class="modal-window__label_f-loaded"
            for="location"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="location">???????????????????? ??????????????</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="location"
            id="location"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              ??????????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.file ? "" : "display-none"
}"
        id="modal-window-file"
      >
        <p class="modal-window__title">???????????????????? ????????</p>
        <form class="modal-window__form" id="modal-window-form-file">
          <label
            class="modal-window__label_f-loaded"
            for="file"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="file">?????????????? ???????? ????
            ????????????????????</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="file"
            id="file"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit
            >
              ????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
      <div
        class="modal-window__container ${
  this.props.modalWindow.fotoOrVideo ? "" : "display-none"
}"
        id="modal-window-foto-or-video"
      >
        <p class="modal-window__title">???????????????????? ???????? ?????? ??????????</p>
        <form class="modal-window__form" id="modal-window-form-foto-or-video">
          <label
            class="modal-window__label_f-loaded"
            for="foto-or-video"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="foto-or-video">?????????????? ???????? ????
            ????????????????????</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="foto-or-video"
            id="foto-or-video"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
              type="submit
            >
              ?????????????? ????????
            </button>
          </div>
          <p class="modal-window__warning ${
  this.props.reason ? "" : "display-none"
}">{{reason}}</p>
        </form>
      </div>
    </section>
    `;
  }
}
