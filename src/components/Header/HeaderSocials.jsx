import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/deepak-jain-94ab78162/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/1947India" target="_blank" rel="noreferrer">
				<FaGithub />
			</a>
			<a
				href="https://www.facebook.com/profile.php?id=100015357668272"
				target="_blank"
				rel="noreferrer"
			>
				<ImFacebook2 />
			</a>
		</div>
	);
};

export default HeaderSocials;
