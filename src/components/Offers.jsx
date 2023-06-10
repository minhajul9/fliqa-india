import img1 from '../assets/images/Group 157.png'
import img2 from '../assets/images/Group 158.png'

const Offers = () => {
    return (
        <div className='text-center'>
            <h2 className="text-[#4C696D] text-4xl font-bold">Our Offers</h2>
            <p className="text-xl mb-8">Discover the best offer on our services</p>

            <div className='flex justify-between mx-16'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>

        </div>
    );
};

export default Offers;