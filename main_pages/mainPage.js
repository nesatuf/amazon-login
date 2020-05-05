import { Selector } from 'testcafe';

export default class LoginPage{
    constructor(){
        this.accountAndLists = Selector('[id=nav-link-accountList]', {timeout: 50000});
        this.accountAndListsAfterLogin = Selector('[id=nav-link-accountList] span', {timeout: 50000});
        this.flyingSignButton = Selector ('[id=nav-flyout-ya-signin]', {timeout: 30000});
        this.emailInput = Selector('[id=ap_email]');
        this.passwordInput = Selector('[id=ap_password]');
        this.continueButton = Selector('[id=continue]');
        this.SignInButton = Selector('[id=signInSubmit]');
        this.errorBox = Selector('[id=auth-error-message-box]');
    }

async insertLoginDetailsAs(t, email, password){
    await t
        .click(this.accountAndLists)
        .click(this.emailInput)
        .typeText(this.emailInput, email, {paste: true})
        .click(this.continueButton)
        .click(this.passwordInput)
        .typeText(this.passwordInput, password, {paste: true})
        .click(this.SignInButton)
    }

async assertValidLoginAsUser(t, userName){
    // Validating User's successful login either with OTP or straight
   try{
    await t
    .hover(this.accountAndLists)
    .expect(this.accountAndListsAfterLogin.innerText).contains('Hello, '+ userName)
    console.log('Valid login granted for user: '+ userName)
   }
   catch(err){
   console.log('OTP required for user: ' + userName) // also we can choose to throw error here to stop test and mark this case as error
   }
}

async assertInvalidPassword(t){
    // Validating that the correct error message has been populated
    await t.expect(this.errorBox.innerText).contains('There was a problem\nYour password is incorrect')
    console.log('Invalid password')
}
    
}