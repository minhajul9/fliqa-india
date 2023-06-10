
const Banner = () => {
    return (
        <div>
            <img src="https://i.ibb.co/NKLpSn4/image-5.jpg" alt="" />
            <div className="text-center">
                <p className="jura-font mt-6 text-[64px] ">India's Leading Creative Platform</p>
                <p className="josefin-font text-3xl text-[#4C696D] mt-2 mb-8">Experience hassle free bookings. Trusted by 2500+ Customers</p>
                <input type="text" className="w-[800px] text-center border border-black rounded-full relative py-[3px]" placeholder="Search service, blog and many more…" />
                <button className="bg-[#221010] text-white px-24 py-[4px] rounded-full absolute left-[1150px] ">Search</button>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-4 my-9 py-2">
                <div className="flex items-center space-x-2">
                    <img src="https://i.ibb.co/2jvyqFq/Group-156.png" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">Verified Reviews</h1>
                        <p className="text-[16px]">For verified reviewers</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <img src="https://i.ibb.co/hCDp9Bq/Frame.png" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">Top Article</h1>
                        <p className="text-[16px]">Helps you decide</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <img src="https://i.ibb.co/QcCstsq/Group-153.png" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">Write Share Win Contest</h1>
                        <p className="text-[16px]">Earn cash for reviews</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <img src="https://i.ibb.co/cgYj3dY/Group-155.png" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">MouthShut for Brands</h1>
                        <p className="text-[16px]">Request a Demo</p>
                    </div>
                </div>
            </div>
            <hr className="border border-black mb-16 mx-20" />
        </div>
    );
};

export default Banner;