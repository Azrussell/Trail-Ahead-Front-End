import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Home/Login/Login";
<<<<<<< HEAD
import Hikedetails from "./Components/Hikedetails/Hikedetails";
import Hikes from "./Components/Hikes/Hikes";
=======
import HikeList from "./Components/HikeList/HikeList";
>>>>>>> hikelist-page
import Profile from "./Components/Profile/Profile";
// import Footer from "./Components/Footer/Footer";
import Aboutsection from "./Components/Aboutsection/Aboutsection";


function App() {
    const [loading, setLoading] = useState(false);
    const override = css`
        display: block;
        border-color: red;
        margin-top: 20%;
    `;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <PropagateLoader
                    color={"#04700c"}
                    Loading={loading}
                    css={override}
                    size={40}
                />
            ) : (
                <>
                    <Navbar />
                    {/* <Home /> */}
                    {/* <Testing/> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="login" element={<Login />} />
<<<<<<< HEAD
                        <Route path='hikedetails' element={<Hikedetails/>}/>
                        <Route path="hike" element={<Hikes />} />
=======
                        {/* <Route path='hikes' element={<Hikes/>}/>
                    <Route path='profile' element={<Contact/>}/> */}
                        <Route path="hike" element={<HikeList />} />
>>>>>>> hikelist-page
                        <Route path="profile" element={<Profile />} />
                    </Routes>
                    
                </>
            )}
        </div>
    );
}

export default App;
