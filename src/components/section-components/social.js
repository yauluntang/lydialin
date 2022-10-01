import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a href="https://www.realtor.com/realestateagents/62903b259fe22c8712028c12" title="Realtor"><img src={publicUrl+"assets/img/realtor.svg"} width="16"/></a></li>
				<li><a href="https://www.zillow.com/profile/linlydia83" title="Zillow"><img src={publicUrl+"assets/img/zillow.svg"} width="16"/></a></li>
			</ul>
		</div>
        }
}

export default Social