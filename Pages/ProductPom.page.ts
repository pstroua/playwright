import {Page} from "@playwright/test"

export class ProdcutPom{
    readonly page:Page;
    constructor(p:Page){
        this.page = p;
    }

    //Définir les locators de la page Login
    elements={
        AddToCartBtn:()=>this.page.locator("#add-to-cart-sauce-labs-backpack"),
        RemoveBtn:()=>this.page.locator("#remove-sauce-labs-backpack"),
        PanierBtn:()=>this.page.locator("[data-test='shopping-cart-badge']"),
        NbrProduit:()=>this.page.locator("[data-test='shopping-cart-badge']")
    }

     async AjouterProduit(){
        await this.elements.AddToCartBtn().click()
    }

    async CheckRemove(){
        return await this.elements.RemoveBtn().isVisible()
    }

    
     async AccessPanier(){
        await this.elements.PanierBtn().click()
    }
    
    async getNbreProduit():Promise<string|null>{
        return await this.elements.NbrProduit().textContent()
    }

}

    