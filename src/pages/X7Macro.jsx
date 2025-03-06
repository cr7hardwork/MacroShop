import "../App.css";
import FormMacro from './FormMacro';
import { useTranslation } from '../translations/TranslationContext';

export default function X7Macro() {
    const translate = useTranslation()
    return (
        <FormMacro text ={translate.MACRO.MacrosX7Information}/>
    );
}
