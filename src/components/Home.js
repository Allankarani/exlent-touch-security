import React from 'react';
import HeaderTop from './HeaderTop';
import Hero from './Hero';
import OurServices from './OurServices';
import WhyPartner from './WhyPartner';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HeaderTop />
      <Hero />
      <OurServices />
      <WhyPartner />
      <Footer />
    </div>
  );
};

export default Home;