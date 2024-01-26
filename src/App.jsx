// App.jsx

import React, { useState } from 'react';
import dmnLogo from '/dmn.png';
import './App.css';
import ImageThumbnail from './components/ImageThumbnail';
import Button from './components/button';
import Hakkimda from './components/hakkimda';
import Iletisim from './components/iletisim';
import Becerilerim from './components/becerilerim'; 

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isim] = useState("DMN");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <body>
      <nav>
        <ul>
          <li onClick={() => handlePageChange("home")}>Ana Sayfa</li>
          <li onClick={() => handlePageChange("hakkimda")}>Hakkımda</li>
          <li onClick={() => handlePageChange("Becerilerim")}>Becerilerim</li>
          <li onClick={() => handlePageChange("İletişim")}>İletişim</li>
          
        </ul>
      </nav>

      <div className="content-container">
        <a href="https://www.linkedin.com/in/ozcan-duman-558a282a5/" target="_blank">
          <img src={dmnLogo} className="logo" alt="dmn" />
        </a>
        <ImageThumbnail />

        {currentPage === "home" && (
          <div>
            <p style={{fontSize:"30px", fontFamily:"fantasy", color:"burlywood"}}>Üretim Akedemi. {isim}</p>
          </div>
        )}

        {currentPage === "hakkimda" && (
          <div>
            <Hakkimda />
          </div>
        )}
        {currentPage === "Becerilerim" && (
          <div>
           <Becerilerim/>
          </div>
        )}
        {currentPage === "İletişim" && (
          <div>
            <Iletisim/>
          </div>
        )}


      </div>

      <footer>
        <p>Copyright © 2024 </p>
      </footer>

      
    </body>
  
    <Button/>
  </>
  );
}

export default App;
