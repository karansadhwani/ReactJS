import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import pic from './pictures/yt.jpg'


function App() {
  return (
      <div>
       <Header />
     
        <HelloWorld name = "Dear User"/>

        <div className="anch"
        
        >
       
          The all in one Entertainment App !!
        </div>


      <div>
        <img src={pic} alt="mypic"  width="100%" height="100%" />
        </div>
    

        <Footer />
      </div>
  );
}

export default App;
