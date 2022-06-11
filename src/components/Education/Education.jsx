import React from "react";
import "./Education.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
	return (
		<section id="educations">
			<h5>Here are Details of</h5>
			<h2>My Education</h2>

			<div className="container educations__container">
				<article className="education">
					<div className="education__head">
						<h3>Birla Institute of Technology, Mesra</h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Master Of Computer Application (MCA)
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Computer Science and Engineering
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>06/2019
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>Present
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>CGPA : </strong>75%
							</p>
						</li>
					</ul>
				</article>

				<article className="education">
					<div className="education__head">
						<h3> Dr.A.P.J. Abdul Kalam University </h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Bachelor of Computer Application (BCA)
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Computer Science and Engineering
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>06/2016
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>06/2019
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Percentage : </strong>62.95%
							</p>
						</li>
					</ul>
				</article>

				<article className="education">
					<div className="education__head">
						<h3>Govt maharaja multi purpose H S school </h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>Secondary Education
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Science (PCM)
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>06/2015
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>05/2016
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Percentage : </strong>61.4%
							</p>
						</li>
					</ul>
				</article>
				<article className="education">
					<div className="education__head">
						<h3>MAHAVEER BAL SANSKAR KENDRA</h3>
					</div>

					<ul className="education__list">
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Course : </strong>HIGH SCHOOL
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Major : </strong>Science
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>From : </strong>07/2012
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>To : </strong>06/2013
							</p>
						</li>
						<li>
							<BiCheck className="education__listIcons" />
							<p>
								<strong>Percentage : </strong>70%
							</p>
						</li>
					</ul>
				</article>
				
			</div>
		</section>
	);
};

export default Services;
