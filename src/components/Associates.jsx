import img1 from '../assets/images/Rectangle 171.jpg'
import img2 from '../assets/images/Rectangle 171.png'
import img3 from '../assets/images/Rectangle 171 (1).png'
import img4 from '../assets/images/Rectangle 171 (2).png'
import img5 from '../assets/images/Rectangle 171 (3).png'
import verified from '../assets/images/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview 1.png'

const Associates = () => {
    return (
        <div className='bg-[#A1E3D8] px-6 pb-4 pt-6'>
            <div className='text-[#4C696D] flex justify-between items-center px-8'>
                <div>
                    <h2 className='text-4xl font-bold'>Find Trusted Associate</h2>
                    <p className='text-xl'>Find the best Fliqa Associate for your special day.</p>
                </div>
                <h2 className='text-2xl'>See More{'>>'}</h2>
            </div>
            <div className='my-12 grid md:grid-cols-5 mx-4'>
                <div className='bg-[#2C2C2C] text-white w-[304px] rounded-3xl shadow-2xl'>
                    <img src={img1} className='rounded-t-3xl' alt="" />
                    <div className='p-4 flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Name Title: </h1>
                            <p>Location</p>
                        </div>
                        <img src={verified} alt="" />
                    </div>
                </div>

                <div className='bg-[#2C2C2C] text-white w-[304px] rounded-3xl shadow-2xl'>
                    <img src={img2} alt="" />
                    <div className='p-4 flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Name Title: </h1>
                            <p>Location</p>
                        </div>
                        <img src={verified} alt="" />
                    </div>
                </div>

                <div className='bg-[#2C2C2C] text-white w-[304px] rounded-3xl shadow-2xl'>
                    <img src={img3} alt="" />
                    <div className='p-4 flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Name Title: </h1>
                            <p>Location</p>
                        </div>
                        <img src={verified} alt="" />
                    </div>
                </div>

                <div className='bg-[#2C2C2C] text-white w-[304px] rounded-3xl shadow-2xl'>
                    <img src={img4} alt="" />
                    <div className='p-4 flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Name Title: </h1>
                            <p>Location</p>
                        </div>
                        <img src={verified} alt="" />
                    </div>
                </div>

                <div className='bg-[#2C2C2C] text-white w-[304px] rounded-3xl shadow-2xl'>
                    <img src={img5} alt="" />
                    <div className='p-4 flex justify-between'>
                        <div>
                            <h1 className='text-xl'>Name Title: </h1>
                            <p>Location</p>
                        </div>
                        <img src={verified} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Associates;