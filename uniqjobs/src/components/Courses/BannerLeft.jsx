import React from 'react'
import CountUpBox2 from './CountUpBox2'
import SecondaryButton from './SecondaryButton'

const BannerLeft = ({title,subtitle,counter}) => {
  const labels = ["Candidates Trained","Candidates Placed","Enrolled Candidates"]
  return (
    <div>
      <h1 className="font-primary text-6xl font-bold mb-2">
            Become a
            <span className="text-primary-600"> {title}</span>
          </h1>
          <p className="font-primary text-lg font-medium leading-lg mb-4">
            {subtitle}
          </p>
          <div className="hidden lg:flex gap-x-6 mt-6 font-primary">
            {counter.map((count, index)=>(
                <CountUpBox2 key={index} value={count} label={labels[index]} />
            ))}
          </div>
          <div className="flex items-center mt-6" data-aos="fade-up"> 
            <SecondaryButton buttonText='Talk to Us Today' />
          </div>
           
    </div>
  )
}

export default BannerLeft
