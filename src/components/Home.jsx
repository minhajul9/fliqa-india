import Associates from "./Associates";
import Awards from "./Awards";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Discover from "./Discover";
import Navbar from "./Navbar";
import Offers from "./Offers";
import PhotographyCourse from "./PhotographyCourse";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Wedding from "./Wedding";


const Home = () => {
    return (
        <div className="max-w-[1728px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Associates></Associates>
            <Services></Services>
            <Discover></Discover>
            <Blogs></Blogs>
            <Wedding></Wedding>
            <Offers></Offers>
            <hr className="border-black my-16" />
            <Testimonial></Testimonial>
            <hr className="border-black my-16" />
            <Awards></Awards>
            <PhotographyCourse></PhotographyCourse>
        </div>
    );
};

export default Home;