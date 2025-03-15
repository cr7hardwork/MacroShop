import { useEffect, useState } from "react"
import { useTranslation } from "../../translations/TranslationContext";
import './WaitingOrder.css'

export default function WaitingOrder(){
    const [timeLeft,setTimeLeft] = useState(50)
    const [ready,SetReady] = useState(false)
    const translate = useTranslation()

    useEffect(() => {
        if (timeLeft <= 0) {
       SetReady(true)
          return;
        }
    
        const timer = setTimeout(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);
    

      return (
        <div className="order-waiting">
          <h1>{translate.ORDER.YOURORDER}</h1>
          {ready ? (
            <h2>
              {translate.ORDER.YOURORDERISREADY}<br />
              <a href="https://disk.yandex.ru/i/ApUDSEAOb_xNGQ" target="_blank" rel="noopener noreferrer">
                {translate.ORDER.DOWNLOADFILE}
              </a>
            </h2>
          ) : (
            <p>{translate.ORDER.ITWILLBEREADY} <strong>{timeLeft} {translate.ORDER.SECOND}</strong></p>
          )}
        </div>
      );
    }
    