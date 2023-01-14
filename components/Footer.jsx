import React from "react";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>2023 CatsShop All rights reserverd</p>
			<p className="icons">
				<a href="https://instagram.com/hachem__11">
					<AiFillInstagram />
				</a>
				<a href="https://twitter.com/hachim__19">
					<AiOutlineTwitter />
				</a>
			</p>
		</div>
	);
};

export default Footer;
