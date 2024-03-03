import React from 'react'

const Projects = () => {
  return (
    <div className="px-2 py-[200px] w-full flex flex-col justify-center items-center gap-[130px]">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
              <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                  style={{ backgroundImage: 'url("https://www.fastiis.org/wp-content/uploads/2021/09/work-731198_1920-1536x1024.jpg")' }}>
              </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-gray-800 font-bold">
                  Front-End Development
              </h2>
              <p className="mt-4 text-gray-600">
                You can view my current frontend project here that related to data analytics website. You can view the live demo, 
                explore, or test it. I hope they can make an impact and help you make a valid decision to hire me based on my expertise and experiences.
              </p>
              <div className="mt-8">
                  <a href="https://jember23.github.io/gobeyond/" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">View</a>
              </div>
          </div>
      </div>

      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
              <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                  style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/closeup-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-picture-id1356364287?b=1&k=20&m=1356364287&s=170667a&w=0&h=tUdqxKA9YwL4M57YRZzP1GTEpXcUm5-onFeQnsMg10A=")' }}>
              </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-gray-800 font-bold">
                  Fullstack Development
              </h2>
              <p className="mt-4 text-gray-600">
                In this section I already uploaded all the personal projects I made in the field of fullstack development.
                You can view the live demo and explore or test them. Hope it could make an impact to make you valid decision 
                to hire me based on my experties and experiences.
              </p>
              <div className="mt-8">
                  <a href="/fullstack" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">View</a>
              </div>
          </div>
      </div>

      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
              <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                  style={{ backgroundImage: 'url("https://www.splendid.ae/images/grphich-des-thre.jpg")' }}>
              </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-gray-800 font-bold">
                  Graphic Designing
              </h2>
              <p className="mt-4 text-gray-600">
                In this section I already uploaded all the personal projects I made in the field of Graphic designing with the tool of Adobe illustrator or Photoshop.
                You can view the live demo and explore or test them. Hope it could make an impact to make you valid decision 
                to hire me based on my experties and experiences.
              </p>
              <div className="mt-8">
                  <a href="/graphicDesigning" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">View</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects