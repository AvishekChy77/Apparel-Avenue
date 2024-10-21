import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../public/banner_1.png";
import slide2 from "../../../public/banner_2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="h-[90vh] w-full object-cover" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[90vh] w-full object-cover" src={slide2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
