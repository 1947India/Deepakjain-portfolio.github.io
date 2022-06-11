import React from "react";
import "./Certifications.css";
import { TbCertificate2 } from "react-icons/tb";

const data = [
	{
		id: 1,
		title: "Power Programmer Virtual ExperienceProgram",
		provider: "Infosys",
		link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/Infosys/qyS5w2xfLoFEKAFpH_Infosys_45muJxY76GurcTwYt_1648383385389_completion_certificate.pdf",
	},
	{
		id: 1,
		title: "SQL (Basic)",
		provider: "Hacker rank",
		link: "https://www.hackerrank.com/certificates/bcacd52a154e",
	},
	{
		id: 1,
		title: "Build a Full Website using WordPress",
		provider: "Coursera",
		link: "https://www.coursera.org/account/accomplishments/verify/53D4J78VTGEU",
	},
	{
		id: 1,
		title: "Introduction to Cybersecurity",
		provider: "Cisco",
		link: "https://www.credly.com/badges/133b0b65-d2ed-47dd-859a-c3d1422c9433/public_url",
	},
	{
		id: 1,
		title: "Software Defined Storage Concepts",
		provider: "Vmware",
		link: "https://www.credly.com/badges/75fb642f-7418-43e4-835b-118f568fad4c",
	},
	{
		id: 1,
		title: "Cloud and Virtualization Concepts",
		provider: "Vmware",
		link: "https://www.credly.com/badges/9e400f69-016a-480f-ae02-540c3575199e/public_url",
	},
	{
		id: 1,
		title: "Python Basic Workshop",
		provider: "WebTek Labs Pvt.Ltd",
		link: "https://drive.google.com/file/d/1BtPckBfo-nd3_BaS0r4XwwzW1at9QvFd/view",
	},
	{
		id: 1,
		title: "HTML fundamentals course",
		provider: "Sololearn",
		link: "https://www.sololearn.com/Certificate/1014-6175921/jpg",
	},
];

const Testimonials = () => {
	return (
		<section id="certifications">
			<h5>Details of Online Courses</h5>
			<h2>Certifications</h2>

			<div className="container certifications__container">
				{data.map(({ id, title, provider, link }) => (
					<article className="certificate">
						<TbCertificate2 className="certificate__icon" />
						<h3>{title}</h3>
						<small>{provider}</small>

						<a href={link} className="btn" target="_blank" rel="noreferrer">
							View
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
