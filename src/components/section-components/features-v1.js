import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
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

function SellerModal(props) {
  return (
    <Modal
			style={{
				overflow:'hidden'}}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6w-AJkNQRfxvU6u473V6WCLU-cwam1F5FPBcW63AA7_3wWg/viewform?embedded=true" width="980" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Modal>
  );
}

function FeaturesComponent(props) {
	
	const [buyModalShow, setBuyModalShow] = React.useState(false);
	const [sellModalShow, setSellModalShow] = React.useState(false);
	

  

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = props.customClass ? props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
			          <h1 className="section-title">Our Main Focus</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12" onClick={() => setBuyModalShow(true)}>
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Buy a home</h3>
			            <p>Over thousands of homes for sale available in the market each month, we can match you with a house you will want to call home.</p>
			            
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12" onClick={() => setSellModalShow(true)}>
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Sell a home</h3>
			            <p>Provide consultanting on staging on the house, and accurate valuation of house. Affordable commission.</p>
									<p>If you want to sell your house fast at top dollar! Listing fee only starts with 1%! </p>
									<p>Highest house price, Lowest commission, WIN-WIN for your savings! </p>
			            
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Flip a house</h3>
			            <p>.</p>
			            
			          </div>
			        </div>
			      </div>


			    </div>
					
					<BuyerModal
							show={buyModalShow}
							onHide={() => setBuyModalShow(false)}
						/>

					<SellerModal
							show={sellModalShow}
							onHide={() => setSellModalShow(false)}
						/>
			  </div>
			</div>
}

export default FeaturesComponent