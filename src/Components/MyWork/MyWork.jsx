import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/mywork_data.js'
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div  className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme} alt="" /> 
      </div>
      <div className="mywork-container">
        {data.map((d , i) => {
            return <img key={i} src={d.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
