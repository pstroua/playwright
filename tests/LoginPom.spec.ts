import{test, expect} from "@playwright/test"
import { LoginPom } from "../Pages/LoginPom.page"

let Lp:LoginPom
test.beforeEach("setup",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    Lp= new LoginPom(page)
})

test("Login Pom valide",async({page})=>{
    /*await Lp.setUsername("standard_user")
    await Lp.setPassword("secret_sauce")
    await Lp.LoginButton()*/
    await Lp.LoginToApp("standard_user","secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("Login Pom Invalide",async({page})=>{
    /*await Lp.setUsername("locked_out_user")
    await Lp.setPassword("Password")
    await Lp.LoginButton()*/
    await Lp.LoginToApp("locked_out_user","Password")

    const message= await Lp.getErrorMessageText()
    const message_attendue="Epic sadface: Username and password do not match any user in this service"
    
    //await expect(await Lp.getMessageError().toHaveText("Epic sadface: Username and password do not match any user in this service"))
    
    //await expect(message).toBe("Epic sadface: Username and password do not match any user in this service")
    await expect(message).toBe(message_attendue)
    
    //await Lp.GetMsgVisible()
})

