import SignInPage from '../tests/pages/signInPage'
import userData from '../tests/pages/user-data.json'

const signInPage = new SignInPage();

describe('Login Success', () => {
  it('Login - Success:You must log in with a valid username.', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
  })
  it('Login - Fail: You must log in with a invalid username.', () => {
    signInPage.accessSignInPage();
    signInPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password);
    signInPage.checkAccessInvalid();
  })
})