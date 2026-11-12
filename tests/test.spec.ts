import{test,expect} from "@playwright/test";

test("MyFirstTest",async function({page}){
 await page.goto("https://www.saucedemo.com/")
})

//utiliser la fct fléchée
test("MySecondTest",async ({page})=>{
 await page.goto("https://www.saucedemo.com/")
})


