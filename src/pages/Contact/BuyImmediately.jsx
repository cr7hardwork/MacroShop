import { useTranslation } from "../../translations/TranslationContext"
import './BuyImmediately.css'

export default function BuyImmediately() {
  const translate = useTranslation()
  return (
    <div className="buy-immediately-container">
      <div className="message-box">
        <p>{translate.CHATWITME.BUYIMMEDIATELY}</p>
        <a
          href="https://t.me/makrobest"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram"
          />
         {translate.CHATWITME.CHATME}
        </a>
      </div>
    </div>
  )
}
