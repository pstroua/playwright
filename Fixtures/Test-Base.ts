//importer un test comme une base pour pouvoir le récupérer par la suite
import {test as base,expect} from "@playwright/test"


export const test = base.extend({
    //fct qui permet qui permet de transmettre cette page au test
    page : async({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await use(page)
    }
})

export {expect}