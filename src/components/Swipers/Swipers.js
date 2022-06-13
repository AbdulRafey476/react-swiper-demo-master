import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import "swiper/swiper-bundle.css";
import "./Swipers.scss";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export default function ReactSwipers() {

  const [data, setData] = useState([]);

  const [swiper, setSwiper] = useState(1);

  useEffect(() => {
    loadData()
  });

  const loadData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');

    if (response.ok) {
      let json = await response.json();
      setData(json.slice(0, 6))
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  const thumbnailClick = (item) => {
    swiper.slideTo(item.id);
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <h2 style={{ textAlign: 'center' }}>MASTER WIZR Modules</h2>

      {data && data.length ?
        <>
          <div className="container2-div" >
            {data.map((item) => (
              <a
                style={{ padding: '10px', cursor: "pointer" }}
                key={item.id}
                onClick={() => thumbnailClick(item)}
              >
                <img
                  className="thumbnail"
                  src={item.thumbnailUrl}
                  alt={item.title}
                />
                <p>{item.title.split(" ")[0]}</p>
              </a>
            ))}
          </div>

          <Swiper
            onSwiper={setSwiper}
            id="main"
            tag="section"
            wrapperTag="ul"
            navigation
            pagination
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            onInit={(swiper) => console.log(swiper, "Swiper initialized")}
            onSlideChange={(swiper) =>
              console.log(swiper, "Slide index changed to: ", swiper.activeIndex)
            }
            onReachEnd={(swiper) => console.log(swiper, "Swiper end reached")}
          >
            {data.map(item => (<SwiperSlide key={item.id} tag="li" style={{ listStyleType: "none" }} >
              <img src={item.url} alt={item.title} style={{ width: "-webkit-fill-available" }} />
            </SwiperSlide>)
            )}
          </Swiper>
        </>
        : null}
    </div>
  );
}
