import {Page} from "@playwright/test"

export class LoginPom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    //Définir les locators de la page Login
    elements={
        username:()=>this.page.locator("#user-name"),
        password:()=>this.page.locator("#password"),
        loginBouton:()=>this.page.locator("#login-button"),
        msgErr:()=>this.page.locator("[data-test='error']")
    }

    //Définir les méthodes associées au locators
    async setUsername(u:string){
        await this.elements.username().fill(u)
    }
    async setPassword(p:string){
        await this.elements.password().fill(p)
    }
    async LoginButton(){
        await this.elements.loginBouton().click()
    }
    async getErrorMessageText():Promise<string|null>{
        return await this.elements.msgErr().textContent()
    }
    getMessageError(){
        return this.elements.msgErr()
    }
    async VisibiliteOfMessage(){
        return await this.elements.msgErr().isVisible()
    }
    async LoginToApp(u:string,p:string){
        await this.setUsername(u)
        await this.setPassword(p)
        await this.LoginButton()
    }


}