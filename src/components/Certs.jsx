import React from 'react'

import scLogo from '../images/scLogo.png';
import AzLogo from '../images/azLogo.png';
import CyberIntro from '../images/cyberIntroLogo.png';
import CyberEssen from '../images/cyberEssenLogo.png';
import MTAD from '../images/MTA_DF.png';
import MTAS from '../images/MTA_SDF.png';

const Certs = () => {
  return (
    <div name='certificate' className='w-full min-h-screen pt-[100px] text-purple-50 bg-[#010026]'>

        {/* Container */}
        <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certifications</p>
                <p className='py-4'>These are the certificates I've earned</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={scLogo} alt="SC900 icon" style={{width: '100px'}}/>
                    <p className='py-4'>SC-900</p>
                    <a href="https://www.credly.com/badges/6c3c53e1-c75c-4cf9-a1a9-0882f3a7bbc8/public_url" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AzLogo} alt="AZ900 icon" style={{width: '100px'}}/>
                    <p className='py-4'>AZ-900</p>
                    <a href="https://www.credly.com/badges/5270622b-cac2-4208-ad41-0fd4583c92c8/public_url" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CyberEssen} alt="Cyber Essentials icon" style={{width: '100px'}}/>
                    <p className='py-4'>Cybersecurity Essentials</p>
                    <a href="https://www.credly.com/badges/db44fd4e-35da-45d1-820e-78362d45430a/public_url" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CyberIntro} alt="Cyber Intro" style={{width: '100px'}}/>
                    <p className='py-4'>Introduction to Cybersecurity</p>
                    <a href="https://www.credly.com/badges/ff1223cf-42ab-4b67-8735-32f3215a8985/public_url" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MTAD} alt="MTAD icon" style={{width: '100px'}}/>
                    <p className='py-4'>Database Fundamentals</p>
                    <a href="https://drive.google.com/file/d/1Ry5cEjls_htXO1qQvD-3K0RoNROFO-nh/view?usp=sharing" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MTAS} alt="MTAS icon" style={{width: '100px'}}/>
                    <p className='py-4'>SD Fundamentals</p>
                    <a href="https://drive.google.com/file/d/1WffEZQHmpKIRSpVQh0_hxppEMqvcjiAw/view?usp=sharing" class="inline-block px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">Verify</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certs