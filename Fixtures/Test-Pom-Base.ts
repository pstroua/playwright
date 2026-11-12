import {test as base,expect,Page} from "@playwright/test"
import {LoginPom} from "../Pages/LoginPom.page"

type Fixtures = {
    Homepage : Page,
    LoginPomValid : LoginPom,
    LoginPomInvalid : LoginPom
}
export const test = base.extend<Fixtures>({
    Homepage : async ({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await use (page)
    },
    LoginPomValid : async ({Homepage},use)=>{
        const Lp=new LoginPom(Homepage)
        await Lp.LoginToApp("standard_user","secret_sauce")
        await use(Lp)
    },
    LoginPomInvalid : async ({Homepage},use)=>{
        const Lp=new LoginPom(Homepage)
        await Lp.LoginToApp("locked_out_user","secret_sauce")
        await use(Lp)
    }

})
export{expect}