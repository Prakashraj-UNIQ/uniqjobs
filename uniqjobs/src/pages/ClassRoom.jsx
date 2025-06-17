import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import class1 from "../assets/images/classrooms/class1.webp";
import class2 from "../assets/images/classrooms/class2.webp";
import class3 from "../assets/images/classrooms/class3.webp";
import class4 from "../assets/images/classrooms/class4.webp";
import class5 from "../assets/images/classrooms/class5.webp";
import class6 from "../assets/images/classrooms/class6.webp";  
import class7 from "../assets/images/classrooms/class7.webp";
import class8 from "../assets/images/classrooms/class8.webp";
import class9 from "../assets/images/classrooms/class9.webp";
import class10 from "../assets/images/classrooms/class10.webp";
import class11 from "../assets/images/classrooms/class11.webp";

const images = [
  { src: class1 },
  { src: class2 },
  { src: class3 },
  { src: class4 },
  { src: class5 },
  { src: class6 },
  { src: class7 },
  { src: class8 },
  { src: class9 },
  { src: class10 },
  { src: class11 },
];

const ClassRoom = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-primary text-center">
            Our Class Rooms
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-10 lg:px-20">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => handleImageClick(i)}
            >
              <img
                src={img.src}
                alt={`class-${i}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold">
                    Classroom {i + 1}
                  </h3>
                  <p className="text-white/80 mt-1">Modern Facilities</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images}
        />
      </div>
    </section>
  );
};

export default ClassRoom;
