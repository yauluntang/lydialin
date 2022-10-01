import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Aboutv4 from './section-components/about-v4';
import Featuresv1 from './section-components/features-v1';
import Testimonial from './section-components/testimonial-v1';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Aboutv4 />
        <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <Testimonial />
        <Footer />
    </div>
}

export default Home_V1

