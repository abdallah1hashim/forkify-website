import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentEl.innerHTML = '';
  }
  renderSpinner = function () {
    const markup = `
        <div class="spinner">
            <svg>
                <use href="${icons}_icon-loader"></use>
            </svg>
        </div>
    `;
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
    return 'done';
  };
  renderError = function (message = this._error) {
    const markup = `
  <div class="error">
    <div>
      <svg>
        <use href="${icons}.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p> 
  </div>
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
    return 'done';
  };
  renderMessage = function (message = '') {
    const markup = `
  <div class="error">
    <div>
      <svg>
        <use href="${icons}.svg#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p> 
  </div>
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
    return 'done';
  };
}
