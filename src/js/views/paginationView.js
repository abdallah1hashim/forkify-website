import View from './view';
import icons from 'url:../../img/icons.svg';
import { state } from '../module';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goto = +btn.dataset.goto;
      console.log(goto);

      handler(goto);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 and others
    if (state.search.currPage === 1 && numPages > 1) {
      return this._generateMarkupNextpage(state.search.currPage);
    }
    // page other
    if (state.search.currPage < numPages) {
      return (
        this._generateMarkupNextpage(state.search.currPage) +
        this._generateMarkupPrepage(state.search.currPage)
      );
    }
    // page last
    if (state.search.currPage === numPages) {
      return this._generateMarkupPrepage(state.search.currPage);
    }
    // page 1 and no other
    else return;
  }
  _generateMarkupNextpage(page) {
    return `
    <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
            <span>Page ${page + 1}</span>
        </button>
    `;
  }
  _generateMarkupPrepage(page) {
    return `
            <button data-goto="${
              page - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page - 1}</span>
            </button>
        `;
  }
}
export default new PaginationView();
