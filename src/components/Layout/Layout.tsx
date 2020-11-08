import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <div className="appContainer">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
