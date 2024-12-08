import React from 'react'
import Header from '../components/common/Header'
import Hero from '../components/landing page/MainComponent/Hero'
import Markets from '../components/landing page/Markets/Markets'
import Nft from '../components/landing page/NFT/Nft'
import Explore from '../components/landing page/ExploreSection/Explore'
import Desc from '../components/landing page/DescriptionSection/Desc'
import Faq from '../components/landing page/FAQ/Faq'
import Footer from '../components/common/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Markets />
      <Nft />
      <Explore />
      <Desc />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
