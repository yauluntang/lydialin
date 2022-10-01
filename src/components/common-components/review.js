import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Review extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        

    return <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              {this.props.comment}</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>{this.props.name}</h5>
			                
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>

        }
}

export default Review