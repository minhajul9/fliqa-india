import img1 from '../assets/images/image 49.png'
import img2 from '../assets/images/image 32.png'
import img3 from '../assets/images/Rectangle 166.png'
import img4 from '../assets/images/image 24.png'

const Discover = () => {
    return (
        <div>
            <div className='bg-img text-white pt-20 ps-12 pb-7 mt-24 flex items-center justify-between gap-6'>

                <div className='-mt-8'>
                    <h1 className='text-[56px] ]'>Discover <br /> <span className='font-bold'>Graphic Design Ideas <br /> and services</span></h1>
                    <p className='mt-5 mb-9 text-4xl'>From branding to marketing</p>

                    <div>
                        <input type="text" className="w-[500px] text-sm border border-black rounded-full relative px-4 py-[3px]" placeholder="what kind of design you are looking for" />
                        <button className="bg-[#221010] text-white px-24 py-[4px] rounded-full absolute left-[450px] ">Search</button>
                    </div>
                </div>
                <img src={img1} className='border-4 border-black mt-14' alt="" />
                <img src={img2} className='border-4 border-black -mt-8' alt="" />
                <img src={img3} className='border-4 border-black mt-14' alt="" />
                <img src={img4} className='border-4 border-black -mt-8' alt="" />
            </div>
            <p className='text-hom text-center text-4xl tracking-wider my-11'>Popular:    Website  Design   Logo Design   Brochure   Label Design</p>
        </div>
    );
};

export default Discover;