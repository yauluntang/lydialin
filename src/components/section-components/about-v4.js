import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/bg-2.jpg"} alt="About Us Image" />
						<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
						<div className="ltn__video-img ltn__animation-pulse1">
							
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
						<h1 className="section-title">The Leading Real Estate
							</h1>
						<p>Lydia started helping her family members to manage rental properties at the age of 18 and gained tremendous experience. After finishing school, Lydia went into the tech industry while started buying her first house. She then expanded from there into fix and flips, residential rental, motel rental and build.</p>

						<p>Having helped many investors achieve financial independence, Lydia is sensitive in the housing market, especially in Maryland. She is very good at valuate houses for sale. Lydia is also a good negotiator, and can help her clients buy their houses at the most reasonable price.</p>

						<p>Lydia has a broad network of investors in the Maryland area and have solid social media platforms. She can promote her listing very efficiently.</p>

						<p>She aims to help more individuals and families build their real estate empire, find their dream houses, and sell their houses at the best and highest price.</p>

						<p>Lydia's availability is 24/7 and always available when the clients need her. Lydia can speak fluently English, Mandarin, and Fuzhou Dialect. Feel free to call or text.</p>
						</div>
						<ul className="ltn__list-item-half clearfix">
						<li>
							<i className="flaticon-home-2" />
							Maryland Real Estate Investor
						</li>
						<li>
							<i className="flaticon-mountain" />
							10 years experience
						</li>
						<li>
							<i className="flaticon-heart" />
							Available 24/7
						</li>
						<li>
							<i className="flaticon-secure" />
							Buying agent/Selling agent
						</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default AboutV4