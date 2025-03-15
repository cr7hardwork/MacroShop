import { NavLink } from 'react-router-dom'
import './NotFound.css'
import { useTranslation } from '../../translations/TranslationContext'
export default function NotFound(){
    const translate = useTranslation()
    return(
        <h1 className="not-found">Нет такой страницы. <br></br> Вернись на главную страницу <br></br> <NavLink className="not-found-link" to="/home">{translate.NAVBAR.Home}</NavLink> </h1>
    )
}