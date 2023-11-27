import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import SectionTitleHome from '../../../../Shared/SectionTitle/SectionTitleHome';

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const [review, setReview] = useState([]);
  useEffect(() => {
    axiosPublic.get('/userReviews').then(res => {
      console.log(res.data);
      setReview(res.data);
    });
  }, []);
  console.log(review);
  return (
    <div>
      <SectionTitleHome
        heading="What Our Clients Say"
        subHeading="Users Satisfaction is our Main Goal"
      ></SectionTitleHome>
      <div className="lg:w-4/5 w-full mx-auto lg:h-[60vh] ">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper h-4/5 my-auto  bg-blue-300 "
        >
          {review.map(item => (
            <SwiperSlide key={item._id} className="px-6 ">
              <div className="grid gap-5 grid-cols-1 px-7 py-7 items-center lg:w-3/5 w-4/5 mx-auto">
                <div className="px-6 shadow-lg space-y-3 py-7 bg-white rounded-lg">
                  <h3 className="text-center text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <h3 className="text-center text-xl font-semibold">
                    {item.profession}
                  </h3>

                  <h3 className="text-center text-sm text-gray-500">
                    {item.review}
                  </h3>
                  <h3 className="text-center flex justify-center">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={item.rating}
                      className="text-center"
                      readOnly
                    />
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
