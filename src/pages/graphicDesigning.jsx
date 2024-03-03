import React from 'react'
import Asus from '../pages/Graphic Design Images/Asus TUF Gaming.jpg';
import Rog from '../pages/Graphic Design Images/Asus ROG jpg.jpg';
import Pager1 from '../pages/Graphic Design Images/Pager 1.jpg';
import Pager2 from '../pages/Graphic Design Images/Pager 2.jpg';
import Design1 from '../pages/Graphic Design Images/Design 1.jpg';
import Design2 from '../pages/Graphic Design Images/Design 2.jpg';
import Design3 from '../pages/Graphic Design Images/Design 3.jpg';
import Design4 from '../pages/Graphic Design Images/Design 4.jpg';

const graphicDesigning = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 p-4 py-[120px]'>
      <img src={Rog} alt="" style={{width: '30%', height: '30%'}}/>
      <img src={Asus} alt="" style={{width: '60%', height: '60%'}}/>
      <img src={Pager1} alt="" style={{width: '50%', height: '50%'}}/>
      <img src={Pager2} alt="" style={{width: '50%', height: '50%'}}/>
      <img src={Design1} alt="" style={{width: '35%', height: '35%'}}/>
      <img src={Design2} alt="" style={{width: '40%', height: '40%'}}/>
      <img src={Design3} alt="" style={{width: '40%', height: '40%'}}/>
      <img src={Design4} alt="" style={{width: '20%', height: '20%'}}/>
    </div>
  )
}

export default graphicDesigning