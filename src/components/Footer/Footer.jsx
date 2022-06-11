import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
	return (
		<footer>
			<a href="#home" className="footer__logo">
				Deepak Jain
			</a>

			<ul className="permalinks">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#education">Education</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#certifications">Certifications</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					href="https://www.facebook.com/profile.php?id=100015357668272"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookF />
				</a>
				<a href="https://www.instagram.com/deepakjain5117/">
					<FiInstagram />
				</a>
				{/* <a href="https://twitter.com/Saha_sHAdy_Dip">
					<IoLogoTwitter />
				</a> */}
			</div>

			<div className="footer__copyright">
				<small>&copy; Deepak Jain. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
