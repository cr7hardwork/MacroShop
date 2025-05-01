import { Link } from 'react-router-dom';
import './Macross/HomePage.css';

export default function HomePage() {
    return (
        <div className="home">
            <div className="message-box">
                <h1>Добро пожаловать!</h1>
                <p>
                    Я <strong>Антон</strong>, уже более 10 лет создаю и продаю макросы для мышек:
                    <br /> <span className="brands">X7, Bloody, Logitech, Razer, Ardor</span>.
                    <br /> Пишу под любые пушки — в одну точку
                </p>
                <p>
                    В связи с ограничениями на оплату с российских карт, воспользуйся быстрой покупкой:
                </p>
                <Link to="/buyimmediately" className="buy-button">Покупай сейчас</Link>
            </div>
        </div>
    );
}
