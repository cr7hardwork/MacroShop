import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from '../translations/TranslationContext';
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);
  const translate = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/user/current', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Ошибка получения пользователя:', err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:3000/review');
        setReviews(res.data);
      } catch (err) {
        console.error('Ошибка при получении отзывов:', err);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async () => {
    if (!user || !text) return;

    const newReview = {
      username: user.userName,
      text,
    };

    try {
      await axios.post('http://localhost:3000/review', newReview, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      setReviews((prevReviews) => [newReview, ...prevReviews]);
      setText('');
    } catch (err) {
      console.error('Ошибка при отправке отзыва:', err);
    }
  };

  return (
    <div className='form'>
      <h2>{translate.REVIEW.REVIEWS}</h2>

      {user ? (
        <>
          <h3>{translate.REVIEW.PUTREVIEW}</h3>
          <textarea
            className='textarea-review'
            placeholder="Ваш отзыв"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSubmit} className='btn'>
            {translate.REVIEW.WRITE}
          </button>
        </>
      ) : (
        <p>{translate.REVIEW.PLEASESIGNIN}</p>
      )}

      <h3>{translate.REVIEW.ALLREVIEWS}</h3>
      {reviews.length === 0 && <p>{translate.REVIEW.DONTHAVEREVIEWS}.</p>}

      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-box" key={review.id || index}>
            <div className="review-header">
              <strong>{review.username}</strong>
            </div>
            <div className="review-text">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
