import React from 'react';
import './portfoliopage.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TabsComponent from '../components/portfolio/TabsComponent/TabsComponent';
const PortfolioPage: React.FC = () => {
  return (
    <div>
  <Header />
    
    <div>
    
      <TabsComponent/>
      </div>
      <div className='mobile-footer'>
      <Footer />
      </div>
    </div>
  );
}
export default PortfolioPage;
