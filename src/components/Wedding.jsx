import img1 from '../assets/images/Group 123 (1).png'
import img2 from '../assets/images/Group 123 (2).png'
import img3 from '../assets/images/Group 123 (3).png'
import img4 from '../assets/images/Group 123.png'

const Wedding = () => {
    return (
        <div className='m-8'>
            <h2 className="text-[#4C696D] text-4xl font-bold">Our Blogs</h2>
            <p className="text-xl mb-8">Check out our latest blogs</p>

            <div className='flex gap-8 justify-between'>
                <div className='bg-[#DDE4FF] rounded-lg'>
                    <img src={img1} alt="" />
                    <div className='p-4'>
                        <p className='font-bold'>Danielle & Ronnie</p>
                        <p>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className='bg-[#FBDADA] rounded-lg'>
                    <img src={img2} alt="" />
                    <div className='p-4'>
                        <p className='font-bold'>Danielle & Ronnie</p>
                        <p>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className='bg-[#FFF9D9] rounded-lg'>
                    <img src={img3} alt="" />
                    <div className='p-4'>
                        <p className='font-bold'>Danielle & Ronnie</p>
                        <p>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className='bg-[#DDF8F3] rounded-lg'>
                    <img src={img4} alt="" />
                    <div className='p-4'>
                        <p className='font-bold'>Danielle & Ronnie</p>
                        <p>38 photos. Kittery,Polland</p>
                    </div>
                </div>

            </div>
            <div className='text-center my-8'>
                <button className='bg-[#DDF9FF] p-4 text-2xl rounded-lg'>View More Wedding {'->'}</button>
            </div>
            <hr />
        </div>
    );
};

export default Wedding;