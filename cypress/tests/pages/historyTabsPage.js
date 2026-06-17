class HistoryTabsPage {
  selectorsList() {
    const selectors = {
      btnNewTransaction: '[href="/transaction/new"]',
      selectFriend:
        '[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemAvatar-root > .MuiAvatar-root > .MuiAvatar-img',
      amountField: '[name="amount"]',
      descriptionNoteField: '[placeholder="Add a note"]',
      btnSubmitTransaction: '[data-test="transaction-create-submit-payment"]',
      alertSuccess: '[data-test="alert-bar-success"]',
      alertError: '[data-test="alert-bar-error"]',
      btnHome: "[data-test='sidenav-home']",
      tabMine: "[data-test='nav-contacts-tab']",
      tabEveryone: "[data-test='nav-public-tab']",
    };
    return selectors;
  }

  historyWithAnyData(amount, description) {
    cy.get(this.selectorsList().btnNewTransaction).click();
    cy.get(this.selectorsList().selectFriend).click();
    cy.get(this.selectorsList().amountField).type(amount);
    cy.get(this.selectorsList().descriptionNoteField).type(description);
    cy.get(this.selectorsList().btnSubmitTransaction).click();
    cy.get(this.selectorsList().btnHome).click();
    cy.get(this.selectorsList().tabMine).click();
  }

  checkMessage() {
    cy.get(this.selectorsList().alertSuccess).should("not.exist");
    cy.get(this.selectorsList().alertError).should("be.visible");
  }
}

export default HistoryTabsPage;
