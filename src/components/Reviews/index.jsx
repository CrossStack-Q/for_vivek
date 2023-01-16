// Reviews
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

export default function Reviews() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        customer&apos;s
        {' '}
        <span>review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-1.png" alt="" />
              <p>
              I have a busy schedule and don't have a lot of time to go to the store, so I decided to give the grocery website a try. I'm glad I did! The website is easy to navigate and the variety of products is impressive. I also love that I can track my order and the delivery was on time. I would highly recommend this website to anyone looking for a efficient grocery shopping experience.
              </p>
              <h3>Tushar Dixit</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-2.png" alt="" />
              <p>
              I recently started using the grocery website and I'm extremely impressed with the user-friendly interface and the variety of products available. I love that I can easily track my orders and the delivery options are a game-changer for me. This website has made my grocery shopping experience so much easier and more convenient.Its Great .
              </p>
              <h3>Raghav Sandilya</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-3.png" alt="" />
              <p>
              I have been using the grocery website for a few months now, and I have to say it has completely changed the way I shop for groceries. The personalized recommendations are spot on and the inventory tracking feature is a lifesaver.  I highly recommend this website to anyone looking for a convenient and efficient way to shop for groceries.
              </p>
              <h3>Sharma Ji</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>
              I love that I can see the inventory of products in real-time, so I never have to worry about purchasing out of stock items. The personalized recommendations are also great,amazing work , it helps me to discover new products. I highly recommend this website to anyone looking for a convenient and efficient way to shop for groceries.
              </p>
              <h3>Ravan</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
