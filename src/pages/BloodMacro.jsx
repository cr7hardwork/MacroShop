import { useTranslation } from "../translations/TranslationContext"
import FormMacro from "./FormMacro"


export default function BloodyMacro(){
    const translate = useTranslation()
    return(
        <FormMacro text ={translate.MACRO.MacroBloodyInfromation} video={<a href="https://disk.yandex.ru/i/n241okq5P2wDFw" target="_blank" rel="noopener noreferrer">Видео макроса</a>}/>
    )
}