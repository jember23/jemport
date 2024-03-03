import React from 'react'

const Contact = () => {
  return (
    
<div name='contact' className='min-h-screen pt-[100px] w-full h-[43.46rem] flex justify-center items-center p-4 bg-[#010026]'>
        
        {/* <div id="map" classname="relative h-300 overflow-hidden bg-cover bg-center bg-no-repeat">
            <iframe
                title='Google Maps'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="600px" height="400px" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
        </div> */}

        {/* Endpoint is from getform.io */}
        <form method='POST' action="https://getform.io/f/75e57627-8677-43a9-9929-15ce874615c9" className='flex flex-col max-w-[600px] w-full items-center'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-purple-50 border-pink-600'>Contact</p>
              <p className='text-purple-50 py-4'>Submit the form below or shoot me an email - jemberalmojuela08@gmail.com</p>
          </div>
          
          <div class="bg-[#010026] p-4 rounded-lg">
              <div class="relative bg-inherit">
                  <input type="text" id="username" name="Username" class="peer bg-transparent h-10 w-[310px] rounded-lg text-sky-50 placeholder-transparent ring-2 px-2 ring-sky-50 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type your username"/>
                  <label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-50 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type your username</label>
              </div>
          </div>
          <div class="bg-[#010026] p-4 rounded-lg">
              <div class="relative bg-inherit">
                  <input type="text" id="email" name="Email" class="peer bg-transparent h-10 w-[310px] rounded-lg text-sky-50 placeholder-transparent ring-2 px-2 ring-sky-50 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type your email"/>
                  <label for="email" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-50 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type your email</label>
              </div>
          </div>
          <div class="bg-[#010026] p-4 rounded-lg">
              <div class="relative bg-inherit">
                  <input type="text" id="message" name="Message" class="peer bg-transparent h-10 w-[310px] rounded-lg text-sky-50 placeholder-transparent ring-2 px-2 ring-sky-50 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type your email"/>
                  <label for="message" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-50 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Any Message?</label>
              </div>
          </div>
          <button className='text-purple-50 border-2 hover:bg-purple-800 hover:border-purple-800 px-3 py-2 my-5 mx-auto flex items-center'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact