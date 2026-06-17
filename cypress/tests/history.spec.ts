import SignInPage from '../tests/pages/signInPage'
import userData from '../tests/pages/user-data.json'
import HistoryTabsPage from './pages/historyTabsPage';

const signInPage = new SignInPage();
const historyTabPage = new HistoryTabsPage();

describe('View Feed History', () => {
  it('View Feed MINE history - Try to view transaction history without previous transactions.', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    historyTabPage.historyWithAnyData(userData.transactionData.amount, userData.transactionData.description);
  });

  it.only('View Feed EVERYONE History - Fail -> It should display a users transaction history correctly (Does not update)', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    historyTabPage.historyWithAnyData(userData.transactionData.amount, userData.transactionData.description)
    const uniqueNote = `Test public feed id-${Date.now()}`;
    cy.reload();
    cy.get("[data-test='nav-public-tab']").click();
    cy.contains(uniqueNote, { timeout: 10000 }).should('be.visible');
  })  
});