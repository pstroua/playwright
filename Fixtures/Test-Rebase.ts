import {test as base,expect,Page} from "@playwright/test"

type Fixtures = {
    LoggedPage : Page
    InvalidLoggesPage : Page
}
export const test=base.extend<Fixtures>({
    LoggedPage : async({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        await use(page)
    },
    InvalidLoggesPage : async({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page .locator("#user-name").fill("locked_out_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        await use(page)
    } 
})
export{expect}