import SignInPage from '../tests/pages/signInPage'
import userData from '../tests/pages/user-data.json'
import TransactionPage from './pages/transactionPage';

const signInPage = new SignInPage();
const transactionPage = new TransactionPage();

describe('Send Success', () => {
  it('Send money - Success: Sufficient balance.', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    transactionPage.transactionWithAnyData(userData.transactionData.amount, userData.transactionData.description)
    transactionPage.checkMessage();
  });
  
  it('Send money - Fail: Insufficient balance', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    transactionPage.transactionWithAnyData(userData.transactionData.amount, userData.transactionData.description)
    transactionPage.checkMessage();
  })  
});