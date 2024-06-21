import React from 'react'

const HeroSection = () => {
      return (
            <>
                  <div className="w-full max-w-7xl mx-auto py-5 my-10 px-4">
                        <div className="flex flex-wrap justify-center lg:justify-between items-center lg:items-end">
                              <div className="description w-full lg:w-1/2 text-center lg:text-start lg:order-1 order-2">
                                    <h1 className=' text-6xl lg:text-8xl font-bold mb-6'>YOUR FEET
                                          DESERVE
                                          THE BEST</h1>
                                    <p className='text-sm  lg:px-0 px-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur eius alias et voluptatum eligendi nesciunt animi fugiat veniam molestiae?</p>
                                    <div className="my-4 flex gap-4 justify-center lg:justify-normal">
                                          <button className='border-2 border-black px-3 py-2 font-medium bg-[#D01C28] text-white hover:bg-transparent hover:text-black transition-all'>Shop Now</button>
                                          <button className='border-2 border-black px-3 py-2 font-medium text-black transition-all hover:bg-[#D01C28] hover:text-white'> Category</button>
                                    </div>
                                    <div className="mb-5">
                                          <p className='mb-3'>Also Available On</p>
                                          <div className=" flex lg:justify-normal justify-center gap-4 items-center">
                                                <a className='inline-block ' href="#"> <img src="images/flipkart.png" alt=""/> </a>
                                                <a  className="inline-block" href="#"><img src="images/amazon.png" alt=""/></a>
                                          </div>
                                    </div>
                              </div>
                              <div className="img w-full lg:w-1/2 flex justify-center lg:justify-end items-end lg:order-2 order-1">
                                    <img className='w-[500px] h-full text-right' src="images/shoe_image.png" alt="" srcset="" />
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default HeroSection