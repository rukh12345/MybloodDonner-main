import React from 'react';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewArrive from '../components/NewArrive';
import Rate from '../components/Rate';
import Slider from '../components/Slider';



const HomePage = () => {
    return (
        <div>
            <div>
                <Header/>
                <NavBar/>
                <Slider/>
                <NewArrive/>
                <ChatBox/>
                <Rate/>
                <Footer/>
            </div>

            
        </div>
    );
}

export default HomePage;
