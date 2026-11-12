import{test,expect} from "../Fixtures/Test-Base"

test("vérifier login valide",async ({page})=>
{
await page.locator("#user-name").fill("standard_user")
await page.locator("#password").fill("secret_sauce")
await page.locator("#login-button").click()
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")  
})

test("Vérifier Login invalide",async({page})=>{
await page .locator("#user-name").fill("locked_out_user")
await page.locator("#password").fill("secret_sauce")
await page.locator("#login-button").click()
await expect(page.locator("[data-test='error']")).toBeVisible()
})
