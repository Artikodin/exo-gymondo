export const getList = () => cy.get('ul');
export const getListItem = () => cy.get('li');
export const getTitle = () => cy.get('h1');
export const getButton = () => cy.get('button');
export const getTime = () => cy.get('time');

export const getCategoryFilter = () =>
  cy.get('[data-test-id="category-filter"]');
export const getCategoryFilterList = () => cy.get('ul.MuiAutocomplete-listbox');
export const getCategoryFilterListItem = () =>
  cy.get('li.MuiAutocomplete-option');

export const getMonthFilter = () => cy.get('[data-test-id="month-filter"]');
export const getMonthFilterList = () => cy.get('ul.MuiMenu-list');
export const getMonthFilterListItem = () => cy.get('li.MuiListItem-root');
