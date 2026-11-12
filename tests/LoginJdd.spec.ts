import {test,expect} from "@playwright/test"
import { LoginPom } from "../Pages/LoginPom.page"
import fs from 'fs' //fs:file system pour lire le fichier csv
import {parse} from "csv-parse/sync" //un parseur pour convertir l'objet csv en objet Js 
import path from 'path' // Permet d'avoir le chemin du file

let Lp:LoginPom
const users = parse(fs.readFileSync(path.join(__dirname,"data/Jdd.csv")),{
    columns:true,
    skip_empty_lines:true,
})

test("LoginJdd",async({page})=>{
    Lp = new LoginPom(page)
    for(const user of users){
        await page.goto("https://www.saucedemo.com/")
        /*await Lp.setUsername(user!.Username)// ! : ni null ni undefined(en Ts) =  le nom null assertion operateur
        await Lp.setPassword(user!.Password)
        await Lp.LoginButton()*/
        await Lp.LoginToApp(user!.Username,user!.Password)
        if(user!.Result == "passed"){
            await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html")
        }else{
            await expect (await Lp.VisibiliteOfMessage()).toBe(true)
            //await expect (Lp.getMessageError()).toBeVisible()
        }
    }
})