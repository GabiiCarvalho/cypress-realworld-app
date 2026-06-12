import SignUpPage from "./pages/signUpPage";
import userData from "./pages/user-data.json";

const signUpPage = new SignUpPage();

describe('Register', () => {
  it('Register - Success', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerWithAnyUser(
      userData.userRegisterSuccess.firstName,
      userData.userRegisterSuccess.lastName,
      userData.userRegisterSuccess.username,
      userData.userRegisterSuccess.password,
      userData.userRegisterSuccess.confirmPassword
    );
  })
  it('Register - Fail: Empty username field', () => {
    signUpPage.accessSignUpPage();
    signUpPage.registerWithAnyUser(
      userData.userRegisterFail.firstName,
      userData.userRegisterFail.lastName,
      userData.userRegisterFail.username,
      userData.userRegisterFail.password,
      userData.userRegisterFail.confirmPassword
    );
    signUpPage.checkAccessInvalid();
  })
})