import {DOMAIN, EMAIL, PASSWORD, USER_NAME} from './config';
import LoginPage from './main_pages/mainPage';

const login = new LoginPage();


fixture `Smoke - UI` // Test tagged as Smoke and UI. So this way you can call this test with it's own tag(s)
    .page(DOMAIN) // Getting page from congfig file, so you can get it from environment variable
    .beforeEach(async t => { 
        await t.maximizeWindow() // maximizing window 
    });

test(`Valid Login to Account`, async t => {
    await login.insertLoginDetailsAs(t, EMAIL, PASSWORD) // Passing valid credentials from congfig file.
    await login.assertValidLoginAsUser(t, USER_NAME)

});

test('Invalid Password Attempts', async t => {
    await login.insertLoginDetailsAs(t, EMAIL, 'wrongPassword001') // Passing invalid password
    await login.assertInvalidPassword(t)
})