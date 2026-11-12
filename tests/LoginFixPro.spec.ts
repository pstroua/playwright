import{test,expect} from "../Fixtures/Test-Rebase"

test("Login Valide",async({LoggedPage})=>{
     await expect (LoggedPage).toHaveURL("https://www.saucedemo.com/inventory.html")
})
test("Login Invalide",async({InvalidLoggesPage})=>{
    await expect (InvalidLoggesPage.getByRole("alert")).toBeVisible()
})