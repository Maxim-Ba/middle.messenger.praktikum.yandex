export const Chat = `
<div class="chats__wrapper">
  {{> modalWindow}}
      <aside class="chats__aside">
        <div class="chats__top-btns">
          <button class="button chats__button button_b-r-5px button_blue">Профиль</button>
          <button class="button chats__button button_b-r-5px button_grey">
            <img src="../../static/img/Search.svg" alt="Поиск" class="chats__img">
            Поиск
          </button>
          <div class="chats__search display-none">
            <img src="../../static/img/Search.svg" alt="Поиск" class="chats__img absolute">
            <input class="chats__search-input button_grey" type="text" placeholder="Поиск">
          </div>

        </div>
        <div class="chats__list-of-chats">
          <card class="chats__chat-item chats__chat-item_selected">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
          <card class="chats__chat-item">
            <div class="chats__pic-wrapper">
              <img class="chats__picture" src="../../static/img/Chat-picture.svg" alt="Картинка чата">
            </div>

            <div class="chats__item-main-info">
              <p class="chats__name">Андрей</p>
              <p class="chats__last-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="chats__item-info">
              <p class="chats__time">10:49</p>
              <div class="chats__new-message">
                <p class="chats__new-message-p">2</p>
              </div>
            </div>
          </card>
        </div>
      </aside>
      <main class="chats">
        <header class="chats__header">
          <div class="chats__current-chat">
            <img class="chats__current-chat-pic" src="../../static/img/Chat-picture.svg" alt="картинка выбраного чата">
            <p class="chats__current-chat-name">Андрей</p>
          </div>
          <img class="chats__menu-btn" src="../../static/img/Menu.svg" alt="меню">

        </header>
        <menu class="chats__menu">
          <div class="chats__menu-content" id="chats">
            <div class="chats__menue-item">
              <img src="../../static/img/Create-chat.svg" alt="Создать чат" class="chats__menue-item-img">
              <p class="chats__menue-item-action">Создать чат</p>
            </div>
            <div class="chats__menue-item">
              <img src="../../static/img/Delete-chat.svg" alt="Удалить чат" class="chats__menue-item-img">
              <p class="chats__menue-item-action">Удалить чат</p>
            </div>
            <div class="chats__menue-item">
              <img src="../../static/img/Change-ava-chat.svg" alt="Изменить аватар чата" class="chats__menue-item-img">
              <p class="chats__menue-item-action">Изменить аватар чата</p>
            </div>
          </div>
          <div class="chats__menu-content display-none" id="one-chat">
            <div class="chats__menue-item">
              <img src="../../static/img/Create-chat.svg" alt="Добавить пользователя" class="chats__menue-item-img">
              <p class="chats__menue-item-action">Добавить пользователя</p>
            </div>
            <div class="chats__menue-item">
              <img src="../../static/img/Delete-chat.svg" alt="Удалить пользователя" class="chats__menue-item-img">
              <p class="chats__menue-item-action">Удалить пользователя</p>
            </div>
          </div>
        </menu>
        <section class="chats__body">
          <div class="chats__messages">
            <menu class="file-menu">
              <div class="chats__menu-content">
                <div class="chats__menue-item">
                  <img src="../../static/img/Video-or-foto.svg" alt="Фото или видео" class="chats__menue-item-img">
                  <p class="chats__menue-item-action">Фото или видео</p>
                </div>
                <div class="chats__menue-item">
                  <img src="../../static/img/File.svg" alt="Файл" class="chats__menue-item-img">
                  <p class="chats__menue-item-action">Файл</p>
                </div>
                <div class="chats__menue-item">
                  <img src="../../static/img/Location.svg" alt="Локация" class="chats__menue-item-img">
                  <p class="chats__menue-item-action">Локация</p>
                </div>
              </div>
            </menu>
          </div>

          <footer class="chats__footer">
            <img class="chats__file-menu" src="../../static/img/Image.svg" alt="Прикрепить файл">
            <input class="chats__input" type="text" placeholder="Сообщение">
            <button class="chats__send-btn">
              <img class="chats__send" src="../../static/img/Arrow-right.svg" alt="Прикрепить файл">
            </button>
          </footer>



        </section>
        <div class="chats__no-chat-selection display-none">
          <p class="chats__no-chat-selection-p">
            Выберите чат чтобы отправить сообщение
          </p>
        </div>

      </main>
    </div>
`;
