import { useTranslation } from "../translations/TranslationContext"
import FormMacro from "./FormMacro"


export default function BloodyMacro(){
    const translate = useTranslation()
    return(
        <FormMacro text ={translate.MACRO.MacroBloodyInfromation}/>
    )
}