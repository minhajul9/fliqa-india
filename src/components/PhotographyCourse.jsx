import img from '../assets/images/image 183.png'
import img2 from '../assets/images/Group 173.png'
import img3 from '../assets/images/Mask group.png'


const PhotographyCourse = () => {
    return (
        <div>
            <div className='photo-back p-32 text-white flex items-center justify-center gap-12 my-8'>
                <div>
                    <h1 className='text-4xl'>
                        ULTIMATE <br /> COURSE IN
                    </h1>
                    <h1 className='text-6xl font-semibold'>PHOTOGRAPHY</h1>
                </div>
                <img src={img} alt="" />
            </div>
            <img src={img2} className='mt-52' alt="" />
            <img src={img3} alt="" />
        </div>
    );
};

export default PhotographyCourse;