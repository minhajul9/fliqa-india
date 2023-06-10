
const Navbar = () => {
    return (
        <div className="bg-[#131514] h-[171px] text-white flex justify-between items-center px-14">
            <div className="flex items-center space-x-8">
                <img src="https://i.ibb.co/gySjp1d/image.png" className="w-48" alt="" />
                <span>Home</span>
                <span>Service</span>
                <span>Portfolio</span>
                <span>Community</span>
                <span>Blog</span>
            </div>
            <div className="space-x-6">
                <button className="bg-[#1E4047] rounded-full px-4 py-2">Sign Up</button>
                <button className="bg-[#1E4047] rounded-full px-4 py-2">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;