import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Modal from 'react-bootstrap/Modal';

function BuyerModal(props) {
  return (
    <Modal
			style={{
				overflow:'hidden'}}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddwB6Mm6-gMRngdQrH4Ad9jJpHXypy-w7xLP4hGHMTr0r_3w/viewform?embedded=true" width="980" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Modal>
  );
}

function ContactForm (){
	const [buyModalShow, setBuyModalShow] = React.useState(false);

	

	let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120 mb--100">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Get A Quote</h4>
						<form>
				
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" onClick={() => setBuyModalShow(true)}>get a free service</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				<BuyerModal
							show={buyModalShow}
							onHide={() => setBuyModalShow(false)}
						/>
				</div>
			</div>
        
}

export default ContactForm