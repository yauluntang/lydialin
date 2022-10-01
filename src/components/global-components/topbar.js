import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class TopBar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
          <div className="ltn__header-top-area section-bg-6">
			<div className="container">
				<div className="row">
				<div className="col-md-7">
					<div className="ltn__top-bar-menu">
					<ul>
						<li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
						<li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
					</ul>
					</div>
				</div>
				<div className="col-md-5">
					<div className="top-bar-right text-end">
					<div className="ltn__top-bar-menu">
						
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
        )
    }
}


export default TopBar