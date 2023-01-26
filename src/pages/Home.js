import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}>

        <div>
          <h1 data-aos='fade-up'>D.M.Rokakis</h1>

          <div className='intro-content d-flex justify-content-between'>
            <p>MERN Stack <br /> Developer</p>
            <button className='primary-button font-bold'><a href='#carousel'>Get Started</a></button>
          </div>
        </div>

      </div>

      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,32L16,42.7C32,53,64,75,96,117.3C128,160,160,224,192,229.3C224,235,256,181,288,138.7C320,96,352,64,384,96C416,128,448,224,480,229.3C512,235,544,149,576,112C608,75,640,85,672,74.7C704,64,736,32,768,64C800,96,832,192,864,229.3C896,267,928,245,960,202.7C992,160,1024,96,1056,74.7C1088,53,1120,75,1152,106.7C1184,139,1216,181,1248,208C1280,235,1312,245,1344,213.3C1376,181,1408,107,1424,69.3L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">

            <div className='n-box2 p-5 font-bold' data-aos='fade-right'>
              <h1 >Yes, you are right...</h1>
              <br />
              <p >I am a Javascript Buff...</p>
            </div>

          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">

            <div>
              <img src="./jsbuff.svg" alt="" height='200' className='w-100' data-aos='fade-up' />
            </div>

          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">

            <div className='n-box2 px-3 py-4 font-bold' data-aos='fade-left'>
              <p>JavaScript is one of the most popular programming 
                languages because of its ubiquitous use on all platforms 
                and mass adoption. Main Use: Web Development</p>
            </div>

          </div>
        </div>
      </div>

    <div className="container my-5 n-box2 py-5 devstack">
      <div className='text-center'>
        <h3 className='font-bold text-center'>My Development Stack</h3>
        <hr />
        <img src="./developer.svg" alt="" height='200' width='200' className='text-center' />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className='font-bold'>
            <h3 className='font-bold'>Front-End</h3>
            <hr />
            <p>HTML/CSS</p>
            <p>Javascript</p>
            <p>ReactDOM</p>
            <p>Redux</p>
            <p>Angular</p>
          </div>

        </div>
        <div className="col-md-4">
          <div className='font-bold text-center'>
            <h3 className='font-bold'>UI/Styling</h3>
            <hr />
            <p>Tailwind CSS</p>
            <p>Material UI</p>
            <p>Bootstrap</p>
            <p>AntDesign</p>
            <p>Semantic UI</p>
          </div>

        </div>
        <div className="col-md-4">
          <div className='font-bold text-end'>
            <h3 className='font-bold'>Back-End/DB</h3>
            <hr />
            <p>Node JS</p>
            <p>Express</p>
            <p>SQL</p>
            <p>Mongo DB</p>
          </div>

        </div>
      </div>
    </div>
    <div>
      <h3 className='font-bold text-center'>Who is Doug?</h3>
      <div className='who-is-doug flex-with-center' style={{backgroundImage:`url('/whoissathya.svg')`}}>
        <div>
          <h3>Hi, Hello, Namaste</h3>
          <hr />
          <p><pre>{JSON.stringify({
            name:"Douglas Rokakis",
            from:"USA",
            age:null,
            gender:"Male"
          }, null, 2)}</pre></p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Home