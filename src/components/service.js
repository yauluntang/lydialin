import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ServiceV1 from './section-components/service-v1';
import Footer from './global-components/footer';

const Service_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="What We Do" subheader="Service" />
        <ServiceV1 />
        <Footer />
    </div>
}

export default Service_V1

