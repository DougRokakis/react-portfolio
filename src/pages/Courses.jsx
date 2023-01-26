import React from 'react';
import Header from "../components/Header";
import courseslist from './coursesdata';

function Courses() {
  return (
    <div>
      <Header />
      <div className="courses-intro" style={{ backgroundImage: `url('./courses.svg')` }}>

        <div className='courses-intro-content'>
          <h1>Education Courses</h1>
          <div>
            <p>“A proud man is always looking down on things and people;
              and, of course, as long as you are looking down, you cannot
              see something that is above you.”</p>
            <button className='primary-button'><a href="#course-list">GET STARTED</a></button>
          </div>

        </div>

      </div>
      <div className='why-me-parent'>
        <div className='why-me n-box1 flex-with-center'>
          <h1>Why These?</h1>
          <div className='why-me-content'>
            <p>“No matter who you are,</p>
            <p>no matter what you did, </p>
            <p>no matter where you've come from, </p>
            <p>you can always change,</p>
            <p>become a better version of yourself.”</p>
          </div>
        </div>
      </div>
      <div className="container courses-list mb-5" id="course-list">

        <h3 className='font-bold'>Take a look at the courses I've taken</h3>
        <hr />

        <div className="row mt-5">

          {courseslist.map((course) => {
            return <div className="col-md-4 mb-5">
              <div className="position-relative course">
                <img src={course.image} alt="" />
                <div className="course-content">
                  <p>{course.title}</p>
                  <hr />
                  <p>{course.description}</p>
                  <button className='primary-button'>Demo</button>
                </div>
              </div>
            </div>
          })}

        </div>

      </div>
    </div>
  )
}

export default Courses