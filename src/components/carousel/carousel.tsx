import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  "https://plus.unsplash.com/premium_photo-1663843332690-6220174770d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1523901839036-a3030662f220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto sm:mx-4 md:mx-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        className="h-[450px] rounded-lg shadow-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
