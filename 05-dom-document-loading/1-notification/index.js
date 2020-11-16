export default class NotificationMessage {


  constructor(text, obj) {
    this.text = text;
    this.duration = obj?.duration;
    this.type = obj?.type;
    console.log(this.text, this.duration, this.type)


    this.render();
    this.initEventListeners();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке 7
    this.element = element.firstElementChild;
  }

  getTemplate() {
    return `
      <div class="notification ${this.type}" style="--value:${this.duration}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">success</div>
          <div class="notification-body">
            ${this.text}
          </div>
        </div>
      </div>
    `;
  }

  initEventListeners () {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  show() {
    const root = document.getElementById('root');
    root.append(this.element);

    setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
}

// const component = new NotificationMessage();
// const element = document.getElementById('root');

// element.append(component.element);
