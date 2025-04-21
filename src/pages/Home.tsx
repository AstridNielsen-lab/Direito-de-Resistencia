import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LegalFoundation from '../components/LegalFoundation';
import ConstitutionalAmendment from '../components/ConstitutionalAmendment';
import HistoricalCases from '../components/HistoricalCases';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LegalFoundation />
      <ConstitutionalAmendment />
      <HistoricalCases />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;