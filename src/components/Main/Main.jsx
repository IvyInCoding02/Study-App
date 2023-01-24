import React from 'react';
import './Main.css';

const Main = (props) => {
    return(
        <section className = "main">
            <div className="container">
                <div className="main">
                  <div className="main-info">
                    <h1 className= "main-title">Welcome to Google Company</h1>
                    <p className= "main-desc">Google LLC is an American multinational technology company
                     focusing on search engine technology, online advertising, cloud computing,
                     computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics</p>
                  </div>
                  <div className="main-img">
                    <img src ={props.img} alt="logo" />
                  </div>
                </div>
            </div>
        </section>
    );   
}
export default Main;
