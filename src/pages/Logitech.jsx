import { useTranslation } from "../translations/TranslationContext"
import FormMacro from "./FormMacro"

export default function Logitech(){
        const translate = useTranslation()
    
    return(
        <FormMacro text ={translate.MACRO.MacrosLogitechInformation}/>
    )
}