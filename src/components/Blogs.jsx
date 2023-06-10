import img1 from '../assets/images/FliqaIndia wedding.png'
import img3 from '../assets/images/FliqaIndia wedding (2).png'
import img2 from '../assets/images/Wedding Trailer.png'

const Blogs = () => {
    return (
        <div className="bg-[#DDF8F3] p-8">
            <h2 className="text-[#4C696D] text-4xl font-bold">Our Blogs</h2>
            <p className="text-xl">Check out our latest blogs</p>

            <div className='grid grid-cols-3 mt-4'>
                <div className='relative'>
                    <img src={img1} className='h-[310px]' alt="" />
                    <div className='absolute top-0 left-2 p-12 rounded-lg text-white bg-black bg-opacity-30 w-[427px] h-[295px]'>
                        <p className='text-xl'><span className='font-bold'>Featured on</span>: Sep 15, 2021</p>
                        <h2 className='text-5xl'>Wedding Photography at Goa</h2>
                    </div>
                </div>

                <div className='relative'>
                    <img src={img2} className='h-[310px]' alt="" />
                    <div className='absolute top-0 left-2 p-12 rounded-lg text-white bg-black bg-opacity-30 w-[427px] h-[295px]'>
                        <p className='text-xl'><span className='font-bold'>Featured on</span>: Sep 15, 2021</p>
                        <h2 className='text-5xl'>Photography: Expectations vs. Reality</h2>
                    </div>
                </div>


                {/* trending */}
                <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                        <h4 className='text-xl'>Trending Now</h4>
                        <p>View All</p>
                    </div>
                    <div className='flex items-center '>
                        <img src={img3} className='w-[100px] h-[78px] shadow' alt="" />
                        <div>
                            <p className="font-bold">Creative Industries are on the verge of depletion due to COVID-19</p>
                            <p>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            
                        </div>
                        
                    </div>
                    <hr className='border-gray-600 mx-8' />
                    <div className='flex items-center'>
                        <img src={img2} className='w-[90px] h-[70px] shadow' alt="" />
                        <div>
                            <p className="font-bold">Creative Industries are on the verge of depletion due to COVID-19</p>
                            <p>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                    <hr className='border-gray-600 mx-8' />
                    <div className='flex items-center'>
                        <img src={img1} className='w-[90px] h-[70px] shadow' alt="" />
                        <div>
                            <p className="font-bold">Creative Industries are on the verge of depletion due to COVID-19</p>
                            <p>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                    <hr className='border-gray-600 mx-8' />

                </div>
            </div>

        </div>
    );
};

export default Blogs;