export const ModalWindow = `
  {{#> layout}}
  <section class="modal-window">
  <div class="modal-window__wrapper"></div>
  <div class="modal-window__container">
    <p class="modal-window__title">Создать чат</p>
    <form class="modal-window__form" id="modal-window">
      <label class="modal-window__label" for="chat-name">Название чата</label>
      <input class="modal-window__text-input" type="text" name="chat-name" placeholder="Название">
      <div class="modal-window__btns">
        <button class="modal-window__button button button_b-r-8px button_grey">
          Отмена
        </button>
        <button class="modal-window__button button button_b-r-8px button_blue">
          Создать чат
        </button>
      </div>
      <p class="modal-window__warning form-warning-text form-warning">
        Чата с таким именем нет
      </p>
    </form>
  </div>
</section>
    
    
  {{/layout}}
`;
