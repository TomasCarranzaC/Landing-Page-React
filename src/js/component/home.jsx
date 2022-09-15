import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
	<>
	<Navbar />
	<div className="container">
		<div className="row">
			<Jumbotron />
		</div>
		<div className="row">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		</div>
	</div>
	<Footer />
	</>
	)
};

export default Home;