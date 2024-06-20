import '../App.css';
import '../responsive.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../Context/state';

import { ethers } from 'ethers';

function TopHeader() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const { account, active, library } = useWeb3React();
    const appContext = useAppContext();

    useEffect(() => {
        if (active) {
            // Set addrWhitelisted to true as a placeholder
            appContext.setAddrWhitelisted(true);
        }
    }, [active, appContext]);

    const handleClick = () => {
        setIsActive(current => !current);
    };

    const onClickBaseCharacter = () => {
        if (!active) {
            alert("Please connect your wallet.");
            navigate('/');
        }
    };

    const onClickChangingRoom = () => {
        if (!active) {
            alert("Please connect your wallet.");
            navigate('/');
        }
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4 px-4 mb-0">
            <div className="container-fluid" style={{ position: "relative" }}>
                <div className='d-flex ' style={{ justifyContent: "space-between", width: "100%", alignItems: "center", position: "relative" }}>
                    <Link to="/"><img src="images/logoas.png" alt="logo" /></Link>
                    <button className="navbar-toggler sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <div id="toggle" className={isActive ? 'on' : ''} onClick={handleClick}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </button>
                </div>

                <div className="collapse navbar-collapse mob-full" id="navbarNav">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="btn" href="https://www.soulbulbs.io/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="btn" to="/listpage" onClick={onClickBaseCharacter}>Base Character</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn" to="/details" onClick={onClickChangingRoom}>Changing Room</Link>
                        </li>
                        <li className="nav-item">
                            <a className="btnconnect btn btn-bg" href="#walletConnectModal" data-toggle="modal">
                                {active 
                                    ? `${String(account).substring(0, 6)}...${String(account).substring(account.length - 4)}`
                                    : "Connect Wallet"}
                                &nbsp;&nbsp; <i className='fas fa-wallet'></i>
                            </a>
                        </li>
                        <div className="mobile-icon">
                            <li className="nav-item">
                                <a className="btn icon-btn" href="#"><img src="images/descord.png" alt="discord" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="btn icon-btn" href="#"><img src="images/twitter.png" alt="twitter" /></a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopHeader;
