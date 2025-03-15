import './Contact.css'
import { useTranslation } from '../../translations/TranslationContext'

export default function MyContacts() {
    const translate = useTranslation()
    return (
        <>
            <div className="contact">
                <h1 >
                    {translate.CONTACT.MyVk}: <a href="https://vk.com/id637670990" target="_blank" rel="noopener noreferrer">Visit</a>
                </h1>

            </div>


        </>

    )
}