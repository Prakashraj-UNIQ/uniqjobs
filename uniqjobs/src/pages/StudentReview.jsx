import React from "react";
import Videogrid from "../components/placements/Videogrid";
import TestimonialCard from "../components/placements/TestimonalsCard";

const StudentReview = () => {
  return (
    <div>
      <Videogrid />
      <h1 className=" py-10 bg-gradient-to-r from-[#0b090a] to-[#ba181b] bg-clip-text text-transparent text-3xl lg:text-5xl text-center fold-primary font-black">
        Student's Testimonals
      </h1>
      <TestimonialCard />
    </div>
  );
};

export default StudentReview;
