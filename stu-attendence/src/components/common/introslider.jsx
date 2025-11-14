import React from "react";
import { Swiper, SwiperSlide , useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const Slidebutton = ({text , css })=>{

const swiper = useSwiper();
return (
<div className=" flex flex-row  p-2  items-center justify-center ">
    <button className={css} 
    onClick={() => swiper.slideNext()}>{text}</button>

    
</div>


)
}

const Skipbutton = ({text , css})=>{

return (
<div className=" flex flex-row  p-2  items-center justify-center">
    <button className={css} 
    onClick={()=>{}}>{text}</button>
</div>
)


}


export default function Introslides(){

return (

<div className="h-screen w-screen overflow-hidden">

  <Swiper
    modules={[Autoplay, Pagination]}
    pagination={{ clickable: true , dynamicBullets: true  }}
    loop={true}
    autoplay={{ delay: 3000  }}
    className="h-full w-full">


 <SwiperSlide>
  <div className="relative flex flex-row gap-4 items-center justify-center text-black bg-white text-6xl font-bold h-screen">
    <h1
      className="text-center text-white font-bold text-8xl"
      style={{
        
        WebkitTextStroke: "1px black",
        textStroke: "8px black",
      }}
    >
      Welcome  to
    </h1>

    <h1 className="bg-black mt-[2rem] p-3 rounded-md text-white">
      Student Attendance
    </h1>

    {/* Fixed button at bottom center */}
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
      <Slidebutton
        text="Next"
        css="bg-black text-white font-bold p-2 rounded-md text-4xl"
      />
      <Skipbutton
        text="Skip..."
        css=" text-black font-bold p-2 rounded-md text-2xl w-16"
      />

    </div>
  </div>
</SwiperSlide>




    <SwiperSlide>
      <div className="h-screen flex items-center justify-center bg-green-500 text-white text-4xl font-bold">
        Learn About Our Features
      </div>
    </SwiperSlide>


    <SwiperSlide>
      <div className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Get Started!
      </div>
    </SwiperSlide>

  </Swiper>
</div>
)



}