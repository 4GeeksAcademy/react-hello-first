import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import  Navbar  from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="" >
		<Navbar/>
		<div className="container my-3">
		<Jumbotron/>

		<div className=" py-5 row text-center">
			<div className="col m-2 p-2 ">
				
		 <Cards />
			</div>
			<div className="col m-2 p-2">
		 <Cards />

			</div>
			<div className="col m-2 p-2">

		 <Cards />
			</div>
			<div className="col m-2 p-2">

		 <Cards />
			</div>
		</div>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
