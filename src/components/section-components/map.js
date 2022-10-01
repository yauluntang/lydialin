import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.996713074521!2d-76.61254054825719!3d39.28832507941175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8049d91128b29%3A0x505548632b4fc1d8!2s300%20E%20Lombard%20St%2C%20Baltimore%2C%20MD%2021202!5e0!3m2!1sen!2sus!4v1664583629897!5m2!1sen!2sus" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map