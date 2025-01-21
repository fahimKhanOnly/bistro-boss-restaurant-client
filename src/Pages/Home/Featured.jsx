import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
  return (
    <div className="featured-main my-20 py-16 px-12">
      <SectionTitle subHeading={"---Check it out---"} heading={"Featured Items"} />

      <div className="md:flex items-center justify-center space-y-4 md:space-x-6">
        <div>
          <img className="" src={featuredImage} alt="" />
        </div>
        <div className="text-black">
          <h3>Jan 14, 2025</h3>
          <h3 className="uppercase">Where can I get some?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel ratione, fugiat exercitationem nesciunt ut distinctio alias iusto odit quod dolorem quisquam! Iste tempore praesentium unde, sequi sapiente, iure explicabo architecto omnis quidem dolore itaque voluptas fugit repudiandae magnam id labore obcaecati veritatis nisi, in eveniet tempora rem. Quas, dolorem.</p>
          <button className="btn glass">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;