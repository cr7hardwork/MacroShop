import "../App.css";
import FormMacro from './FormMacro';
import { useTranslation } from '../translations/TranslationContext';

export default function X7Macro() {
    const translate = useTranslation()
    return (
        <FormMacro text ={translate.MACRO.MacrosX7Information}  price={'1000'}  video={<a href="https://disk.yandex.ru/i/n241okq5P2wDFw" target="_blank" rel="noopener noreferrer">Видео макроса</a>}  />)
}
