import { LoginPom } from "../Pages/LoginPom.page"
import { ProdcutPom } from "../Pages/ProductPom.page"
import{test, expect} from "@playwright/test"

let Lp:LoginPom
let Pp:ProdcutPom
test.beforeEach("setup",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    Lp= new LoginPom(page)
    Pp= new ProdcutPom(page)
    /*await Lp.setUsername("standard_user")
    await Lp.setPassword("secret_sauce")
    await Lp.LoginButton()*/
    await Lp.LoginToApp("standard_user","secret_sauce")
})


test("Parcours E2E Product Pom valide",async({page})=>{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await Pp.AjouterProduit()
    await expect( Pp.CheckRemove())
    await expect(await Pp.getNbreProduit()).toBe("1")
    await Pp.AccessPanier()
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")

})