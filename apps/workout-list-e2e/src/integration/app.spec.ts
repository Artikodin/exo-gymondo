import {
  getList,
  getListItem,
  getTitle,
  getButton,
  getMonthFilter,
  getMonthFilterList,
  getMonthFilterListItem,
  getTime,
  getCategoryFilter,
  getCategoryFilterList,
  getCategoryFilterListItem,
} from '../support/app.po';

describe('workout-list', () => {
  beforeEach(() => cy.visit('/'));

  it('should go to detail page and come back', () => {
    getList().within(() => {
      getListItem().eq(3).contains('workout4').click();
    });
    getTitle().contains('workout4');
    getButton().click();
    getList().within(() => {
      getListItem().eq(3).contains('workout4');
    });
  });
  it('should filter by month', () => {
    getMonthFilter().click();
    getMonthFilterList().within(() => {
      getMonthFilterListItem().eq(3).contains('January').click();
    });
    getList().within(() => {
      getTime()
        .eq(2)
        .contains(/\b(\w*January\w*)\b/);
      getTime()
        .eq(3)
        .contains(/\b(\w*January\w*)\b/);
      getTime()
        .eq(4)
        .contains(/\b(\w*January\w*)\b/);
    });
  });
  it('should filter by category', () => {
    getCategoryFilter().click();
    getCategoryFilterList().within(() => {
      getCategoryFilterListItem().eq(3).contains('c4').click();
    });
    getList().within(() => {
      getListItem().eq(2).contains('c4');
      getListItem().eq(3).contains('c4');
      getListItem().eq(4).contains('c4');
    });
  });
});
