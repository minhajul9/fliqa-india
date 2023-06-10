import img1 from '../assets/images/Screenshot 2023-06-09 204356.png'
import img2 from '../assets/images/Ellipse 1.png'

const Testimonial = () => {
    return (
        <div className='flex justify-around my-16'>
            <img src={img1} alt="" />
            <div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="text-[#4C696D] text-4xl font-bold">Testimonials</h2>
                        <p className="text-xl">Words from our clients</p>
                    </div>
                    <div>
                        <button className='border-2 border-black px-8 rounded-xl mx-2'>Google</button>
                        <button className='border-2 border-black px-8 rounded-xl mx-2'>Facebook</button>
                        <button className='border-2 border-black px-8 rounded-xl mx-2'>Weddingwire</button>
                        <button className='border-2 border-black px-8 rounded-xl mx-2'>WedmeGood</button>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='bg-[#416F75] rounded-lg text-white relative w-48 h-72 text-center mt-16'>
                        <img src={img2} className='absolute -top-10 left-24' alt="" />
                        <p className='pt-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                        <p className='font-bold'>Random Name</p>
                    </div>
                    <div className='bg-[#416F75] rounded-lg text-white relative w-48 h-72 text-center mt-16'>
                        <img src={img2} className='absolute -top-10 left-24' alt="" />
                        <p className='pt-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                        <p className='font-bold'>Random Name</p>
                    </div>
                    <div className='bg-[#416F75] rounded-lg text-white relative w-48 h-72 text-center mt-16'>
                        <img src={img2} className='absolute -top-10 left-24' alt="" />
                        <p className='pt-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                        <p className='font-bold'>Random Name</p>
                    </div>
                    <div className='bg-[#416F75] rounded-lg text-white relative w-48 h-72 text-center mt-16'>
                        <img src={img2} className='absolute -top-10 left-24' alt="" />
                        <p className='pt-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                        <p className='font-bold'>Random Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;