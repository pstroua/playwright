import{test,expect} from "../Fixtures/Test-Pom-Base"

test("Login Valide",async({LoginPomValid})=>{
     await expect (LoginPomValid.page).toHaveURL("https://www.saucedemo.com/inventory.html")
})
test("Login Invalide",async({LoginPomInvalid})=>{
    await expect (LoginPomInvalid.page.getByRole("alert")).toBeVisible()
})
