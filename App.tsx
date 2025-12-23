import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import PlanTrip from './pages/PlanTrip';
import Accommodation from './pages/Accommodation';
import CarRental from './pages/CarRental';
import Safari from './pages/Safari';
import Activities from './pages/Activities';
import Culture from './pages/Culture';
import Resources from './pages/Resources';
import Explore from './pages/Explore';
import DetailPage from './pages/DetailPage';
import ProviderDashboard from './pages/ProviderDashboard';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [currentPage]);

  const navigateToDetail = (page: Page, item: any) => {
    setSelectedItem(item);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.PLAN:
        return <PlanTrip />;
      case Page.ACCOMMODATION:
        return <Accommodation setPage={setCurrentPage} onSelect={(item) => navigateToDetail(Page.ACCOMMODATION_DETAIL, item)} />;
      case Page.CAR_RENTAL:
        return <CarRental setPage={setCurrentPage} onSelect={(item) => navigateToDetail(Page.CAR_DETAIL, item)} />;
      case Page.SAFARI:
        return <Safari setPage={setCurrentPage} onSelect={(item) => navigateToDetail(Page.SAFARI_DETAIL, item)} />;
      case Page.ACTIVITIES:
        return <Activities setPage={setCurrentPage} onSelect={(item) => navigateToDetail(Page.ACTIVITY_DETAIL, item)} />;
      case Page.CULTURE:
        return <Culture setPage={setCurrentPage} onSelect={(item) => navigateToDetail(Page.CULTURE_DETAIL, item)} />;
      case Page.RESOURCES:
        return <Resources setPage={setCurrentPage} />;
      case Page.EXPLORE:
        return <Explore />;
      case Page.PROVIDER_DASHBOARD:
        return <ProviderDashboard 
          setPage={setCurrentPage} 
          onPreview={(page, item) => navigateToDetail(page, item)}
        />;
      
      // Detail Page Catch-all
      case Page.ACCOMMODATION_DETAIL:
      case Page.CAR_DETAIL:
      case Page.SAFARI_DETAIL:
      case Page.ACTIVITY_DETAIL:
      case Page.CULTURE_DETAIL:
        return <DetailPage type={currentPage} data={selectedItem} setPage={setCurrentPage} />;

      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
      <ChatBot />
    </div>
  );
}

export default App;