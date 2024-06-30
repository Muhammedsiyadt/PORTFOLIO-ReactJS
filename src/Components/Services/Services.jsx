import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="" />
      </div>
      <div className="services-container">
       {data.map((s,i) => {
        return <div key={i} className="services-format">
            <h3>{s.s_no}</h3>
            <h2>{s.s_name}</h2>
            <p>{s.s_desc}</p>
            <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="" />
            </div>
        </div>
       })}
      </div>
    </div>
  )
}

export default Services
