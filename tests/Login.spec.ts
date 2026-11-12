import{test,expect}from "@playwright/test";

test.beforeEach("setup",async({page})=>{
await page.goto("https://www.saucedemo.com/")
})

test.afterEach("teardown",async({page})=>{
await page.context().clearCookies()//nettoyer les cookies pour l'environnement
await page.evaluate(()=>localStorage) //nettoyer le localstorge
})




test("vérifier login valide",{tag:"@TNR"},async ({page})=>
{
//visiter l'url de sauce Demo
//await page.goto("https://www.saucedemo.com/")
//Saisir username
await page.locator("#user-name").fill("standard_user")

//Saisir Password
await page.locator("#password").fill("secret_sauce")
    
//Cliquer sur le bouton login
await page.locator("#login-button").click()

//rediriger vers la page product
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")  
})

test("Vérifier Login invalide",{tag:["@smoke","@TNR"]},async({page})=>{
//await page.goto("https://www.saucedemo.com/")
await page .locator("#user-name").fill("locked_out_user")
await page.locator("#password").fill("secret_sauce")
await page.locator("#login-button").click()
await expect(page.locator("[data-test='error']")).toBeVisible()
//await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")

})


test("Vérifier Login invalide with accessbility locator",{tag:["@try"]},async({page})=>{
await page.getByRole("textbox",{name:"Username"}).fill("Roua")
await page.getByRole("textbox",{name:"Password"}).fill("secret-sauce")
await page.getByRole("button",{name:"Login"}).click()
await expect(page.getByRole("alert")).toBeVisible()
//await expect(page.getByRole("heading",{name:"Epic sadface: Sorry, this user has been locked out."})).toBeVisible()
})



