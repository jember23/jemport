import React from 'react'

import { TypeAnimation } from 'react-type-animation';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import MyProfile from '../images/Profile.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import GitHub from '../images/github.png';
import Tailwind from '../images/tailwind.png';
import azureDevOps from '../images/AzureDevOpsLogo.png';
import CSharp from '../images/C_Sharp.png';
import MSSQL from '../images/Mssql.png';
import ASP from '../images/ASP.png';
import AdobeAI from '../images/adobeAI.png';
import PS from '../images/Photoshop.png';

const Home = () => {
  return (
    <div name='home' className='flex flex-col items-center justify-center w-full min-h-screen pt-[200px] bg-[#010026]'>

        {/* <div className='absolute top-12 right-0 py-[80px] hidden lg:flex'>
          <img className='pb-[62px] h-full w-full object-cover' src={MyProfile} alt="Profile" style={{width: '900px', height: '500px'}}/>
        </div> */}

            {/* Container */}
            <div className='max-w-[1350px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-sky-50 text-4xl sm:text-7xl'>Hi,</h1>
                <h1 className='text-4xl sm:text-6xl font-bold text-sky-50 z-10'>I am Jember Almojuela</h1>

                <h1 className='text-4xl sm:text-6xl font-bold text-sky-300 z-10'>
                  <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'I am a Frontend developer',
                    1000, // wait 1s before replacing "Front-end Developer" with "Software Engineer"
                    'I am a Software Engineer',
                    1000,
                    'I am a Graphic Designer',
                    1000
                    ]}
                    wrapper="span"
                    speed={180}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </h1>
                <p className='text-sky-50 py-4 max-w-[700px] z-10'>As a versatile front-end developer, experienced software engineer, and graphic artist, I bring a passion for creating seamless user experiences and robust digital solutions.</p>
                
                {/* View work button */}
                {/* <div className='z-10'>
                    <button className='group border-2 px-3 py-3 my-2 flex items-center text-sky-50 hover:bg-purple-800 hover:border-purple-800'>About Me
                          <span className='group-hover:rotate-90 duration-300'>
                              <HiArrowNarrowRight className='ml-3' />
                          </span>
                    </button>
                </div> */}
            </div>
        
        {/* About */}
        <div name='about' className='mt-[300px] mb-[200px] text-purple-50'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                     <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Jember, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>As a passionate front-end developer, I specialize in crafting extraordinary digital experiences with a keen eye for design. My expertise lies in not only building but also occasionally designing captivating interfaces. Currently, I am dedicated to creating cutting-edge, responsive front-end applications that seamlessly blend aesthetics with functionality. Let's collaborate to elevate your online presence and engage your audience with a user-centric approach to web development.</p>
                </div>
            </div>
        </div>
    </div>

    {/* Skill */}
    <div className='max-w-[1080px] mt-[90px] mb-[200px] p-4 flex flex-col justify-center w-full text-purple-50'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skill</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center items-center '>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" style={{width: '50px'}}/>
                    <p className='py-4'>HTML 5</p>
                    <div class="w-full h-4">
                        <div class="w-[87%] h-full text-center text-xs bg-violet-500">8.7 out of 10</div>
                    </div>
                </div>
                
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" style={{width: '50px'}}/>
                    <p className='py-4'>CSS</p>
                    <div class="w-full h-4">
                        <div class="w-[83%] h-full text-center text-xs bg-violet-500">8.3 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" style={{width: '50px'}}/>
                    <p className='py-4'>JavaScript</p>
                    <div class="w-full h-4">
                        <div class="w-[68%] h-full text-center text-xs bg-violet-500">6.8 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" style={{width: '50px'}}/>
                    <p className='py-4'>Tailwind CSS</p>
                    <div class="w-full h-4">
                        <div class="w-[73%] h-full text-center text-xs bg-violet-500">7.3 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon" style={{width: '50px'}}/>
                    <p className='py-4'>REACT</p>
                    <div class="w-full h-4">
                        <div class="w-[64%] h-full text-center text-xs bg-violet-500">6.4 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" style={{width: '50px'}}/>
                    <p className='py-4'>GitHub</p>
                    <div class="w-full h-4">
                        <div class="w-[61%] h-full text-center text-xs bg-violet-500">6.1 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={azureDevOps} alt="Azure DevOps icon" style={{width: '50px'}}/>
                    <p className='py-4'>Azure DevOps</p>
                    <div class="w-full h-4">
                        <div class="w-[68%] h-full text-center text-xs bg-violet-500">6.8 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="CSharp icon" style={{width: '50px'}}/>
                    <p className='py-4'>C Sharp</p>
                    <div class="w-full h-4">
                        <div class="w-[63%] h-full text-center text-xs bg-violet-500">6.3 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MSSQL} alt="MSSQL icon" style={{width: '60px'}}/>
                    <p className='py-4'>MSSQL</p>
                    <div class="w-full h-4">
                        <div class="w-[54%] h-full text-center text-xs bg-violet-500">5.4 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ASP} alt="MSSQL icon" style={{width: '140px', height:'60px'}}/>
                    <p className='py-4'>ASP.Net Core MVC</p>
                    <div class="w-full h-4">
                        <div class="w-[54%] h-full text-center text-xs bg-violet-500">5.4 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AdobeAI} alt="Illustrator icon" style={{width: '60px'}}/>
                    <p className='py-4'>Adobe Illustrator</p>
                    <div class="w-full h-4">
                        <div class="w-[62%] h-full text-center text-xs bg-violet-500">6.2 out of 10</div>
                    </div>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PS} alt="Photoshop icon" style={{width: '55px', height:'50px'}}/>
                    <p className='py-4'>Adobe Photoshop</p>
                    <div class="w-full h-4">
                        <div class="w-[60%] h-full text-center text-xs bg-violet-500">6.0 out of 10</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Home