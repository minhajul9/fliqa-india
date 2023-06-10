import img1 from '../assets/images/Rectangle 208.png'
import img2 from '../assets/images/Rectangle 209.png'
import img3 from '../assets/images/image 149.png'

import img4 from '../assets/images/image-removebg-preview - 2022-07-23T230415 1.png'
import img5 from '../assets/images/image-removebg-preview - 2022-07-23T230432.png'
import img6 from '../assets/images/image-removebg-preview - 2022-07-23T230437.png'
import img7 from '../assets/images/image 184.png'
import img8 from '../assets/images/image-removebg-preview - 2022-07-23T230425.png'
const Awards = () => {
    return (
        <div className='my-24'>
            <div className='flex justify-center items-center gap-6 bg-[#DDF8F3] p-8'>
                <div className='flex items-center gap-6'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>
                    <div className='flex justify-between bg-white items-center px-4 rounded-lg'>
                        <img src={img3} className='rounded-lg mx-16' alt="" />
                        <p>4.9/5</p>
                    </div>


                </div>
            </div>

            <div className='bg-[#ACCBC7] my-8 p-8'>
                <div className='text-center'>
                    <h2 className="text-[#4C696D] text-4xl font-bold">Our Success</h2>
                    <p className="text-xl">Journey of our success.</p>
                </div>

                <div className='flex justify-center gap-6'>
                    <div>
                        <div className='h-[203px] w-[203px] bg-white rounded-full flex items-center justify-center'>
                            <img src={img4} alt="" />
                        </div>
                        <p className='w-52 text-center text-sm'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                    </div>

                    <div>
                        <div className='h-[203px] w-[203px] bg-white rounded-full flex items-center justify-center'>
                            <img src={img5} alt="" />
                        </div>
                        <p className='w-52 text-center text-sm'>Appreciation from Startup Bengal for our creative startup community</p>
                    </div>


                    <div>
                        <div className='h-[203px] w-[203px] bg-white rounded-full flex items-center justify-center'>
                            <img src={img6} alt="" />
                        </div>
                        <p className='w-52 text-center text-sm'>FliqaIndia got featured on Yourstory. Click here</p>
                    </div>

                    <div>
                        <div className='h-[203px] w-[203px] bg-white rounded-full flex items-center justify-center'>
                            <img src={img7} alt="" />
                        </div>
                        <p className='w-52 text-center text-sm'>Received awards from ImagesBazaar on leading creative industry</p>
                    </div>
                    <div>
                        <div className='h-[203px] w-[203px] bg-white rounded-full flex items-center justify-center'>
                            <img src={img8} alt="" />
                        </div>
                        <p className='w-52 text-center text-sm'>Top ten in Intuit Circle Codeathon, 2020</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Awards;