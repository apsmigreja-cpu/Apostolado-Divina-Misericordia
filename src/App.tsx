import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Devotion from './components/Devotion';
import Prayers from './components/Prayers';
import History from './components/History';
import Gallery from './components/Gallery';
import Updates from './components/Updates';
import ImagePage from './components/ImagePage';
import FeastPage from './components/FeastPage';
import RosaryPage from './components/RosaryPage';
import HourPage from './components/HourPage';
import { testConnection } from './lib/firebase';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    testConnection();
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio': return <Home onExplore={setActiveSection} />;
      case 'devocao': return <Devotion onNavigate={setActiveSection} />;
      case 'imagem': return <ImagePage onNavigate={setActiveSection} />;
      case 'festa': return <FeastPage onNavigate={setActiveSection} />;
      case 'terco': return <RosaryPage onNavigate={setActiveSection} />;
      case 'hora': return <HourPage onNavigate={setActiveSection} />;
      case 'oracoes': return <Prayers />;
      case 'historia': return <History />;
      case 'galeria': return <Gallery />;
      case 'atualizacoes': return <Updates />;
      default: return <Home onExplore={setActiveSection} />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderContent()}
    </Layout>
  );
}
