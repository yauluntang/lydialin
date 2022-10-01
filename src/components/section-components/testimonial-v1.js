import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Review from '../common-components/review';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
			          <h1 className="section-title">Clients Feedback</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
						<Review comment="Lydia was our agent when we bought our first house in Maryland . She is super patient and knowledgeable. We enjoyed working with her all along . She always provided with great opinions and resources. We would love to work with her again" name="Jaye"></Review>
						<Review comment="Our agent Lydia made a lot of useful suggestions when we bought our first rental property. She was very responsive and almost responded my phone call and text messages 24/7. I highly recommend her to other buyers" name="Peter"></Review>
						<Review comment="Lydia is a very experienced and professional agent . Her knowledge about the houses was superior and we got great benefits to get our house . She’s also very responsive and patient with all my questions . We would highly recommend her for anyone to buy houses in maryland" name="David"></Review>
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial