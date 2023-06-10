import img1 from '../assets/images/image 64.png'
import img2 from '../assets/images/image 64 (1).png'
import img3 from '../assets/images/image 64 (2).png'
import img4 from '../assets/images/image 64 (3).png'

const Services = () => {
    return (
        <div className="my-16">
            <div className='text-[#4C696D] items-center px-8 my-8'>
                <h2 className='text-4xl font-bold'>Our Featured Services</h2>
                <p className='text-xl'>Discover the range of services provided by FliqaIndia</p>
            </div>

            <div className='grid md:grid-cols-4 px-8'>
                <div className='text-center w-[328px] shadow-lg pb-4 rounded-xl'>
                    <img src={img1}  alt="" />
                    <h3 className='font-bold'>Pre Wedding Photoshoot</h3>
                    <hr className='mx-5' />
                    <p>Starting at 25,000 (One Day)</p>
                    <button className='bg-[#4E99A4] text-white px-16 rounded-xl mt-4'>Know More</button>
                </div>

                <div className='text-center w-[328px] shadow-lg pb-4 rounded-xl'>
                    <img src={img2}  alt="" />
                    <h3 className='font-bold'>Wedding Photoshoot</h3>
                    <hr className='mx-5' />
                    <p>Starting at 65,000 (Two days )</p>
                    <button className='bg-[#4E99A4] text-white px-16 rounded-xl mt-4'>Know More</button>
                </div>
                <div className='text-center w-[328px] shadow-lg pb-4 rounded-xl'>
                    <img src={img3}  alt="" />
                    <h3 className='font-bold'>Portfolio Shoot</h3>
                    <hr className='mx-5' />
                    <p>Starting at 25,000 (Standard price for 6-8 hours)</p>
                    <button className='bg-[#4E99A4] text-white px-16 rounded-xl mt-4'>Know More</button>
                </div>

                <div className='text-center w-[328px] shadow-lg pb-4 rounded-xl'>
                    <img src={img4}  alt="" />
                    <h3 className='font-bold'>Birthday Baby Folio</h3>
                    <hr className='mx-5' />
                    <p>Starting at 15,000 (One days)</p>
                    <button className='bg-[#4E99A4] text-white px-16 rounded-xl mt-4'>Know More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Services;