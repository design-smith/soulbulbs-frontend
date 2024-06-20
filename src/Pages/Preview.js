import { useState } from 'react';
import '../App.css';
import '../responsive.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import NavBar from '../Components/TopHeader';
import WalletConnectModal from "../Components/WalletConnectModal";
import { useAppContext } from '../Context/state';
import api from '../utils/api';

function Preview() {
    const [changePath, setChangePath] = useState('/details');
    const appContext = useAppContext();

    const congrats = () => {
        $(".congrates_heading").css("display", "block");
        $("#image_gif").addClass("congrates_preview");
        $("#back_btn").hide();
        $("#nametoken").hide();
        setChangePath('/');
    }

    const onClickEthereum = async () => {
        /*let res = await checkDna();
        if (res.duplicated === true) {
            return alert("Current traits combination is already minted.");
        }
        if (res.completed === false) {
            return alert("You haven't selected enough traits.");
        }*/

        $("#closebtn").click();
        // Simulate minting process without smart contract interaction
        alert("Minting with Ethereum...");
        congrats();
        addDna();
    }

    const onClickSoul = async () => {
        /*let res = await checkDna();
        if (res.duplicated === true) {
            return alert("Current traits combination is already minted.");
        }
        if (res.completed === false) {
            return alert("You haven't selected enough traits.");
        }*/

        $("#closebtn").click();
        // Simulate minting process without smart contract interaction
        alert("Minting with SOULS...");
        congrats();
        addDna();
    }

    const generateDNAString = () => {
        let traitPath = appContext.traitPath;
        let dnaStr = '';

        let dnaItem = '00';
        if (traitPath.background.length !== 0) {
            dnaItem = traitPath.background.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.hoodie.length !== 0) {
            dnaItem = traitPath.hoodie.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.bulb.length !== 0) {
            dnaItem = traitPath.bulb.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.overhead.length !== 0) {
            dnaItem = traitPath.overhead.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.hat.length !== 0) {
            dnaItem = traitPath.hat.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.glasses.length !== 0) {
            dnaItem = traitPath.glasses.split('_')[0];
        }
        dnaStr += dnaItem;

        dnaItem = '00';
        if (traitPath.body.length !== 0) {
            dnaItem = traitPath.body.split('_')[0];
        }
        dnaStr += dnaItem;

        return dnaStr;
    }

    const checkDna = async () => {
        let dnaStr = generateDNAString();
        let completed = true;
        let res = await api.post('/checkDna', {
            dna: dnaStr
        });
        return {
            duplicated: res.data.duplicated,
            completed
        }
    }

    const addDna = async () => {
        let dnaStr = generateDNAString();
        await api.post('/addDna', {
            id: Date.now().toString(), // Simulate ID generation
            dna: dnaStr
        });
    }

    return (
        <div>
            <div className="change-room-main">
                <NavBar />
                <div className="container-fluid p-0">
                    <div className="details-page bgimgin" id="image_gif" >
                        <div className="box-full2" >
                            <div className="details-box-p p-0" style={{ borderRadius: "0", width: "100%", position: "relative" }}>
                                <figure className='winnershow'>
                                    <div style={{ position: "relative" }}>
                                        <div className='congrates_heading' style={{ position: "absolute", top: "32px", margin: "auto", width: "100%" }}>
                                            <h2 className='congo_msg' style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>CONGRATULATIONS!</h2>
                                            <p className='congo_para' style={{ color: "white", fontSize: "27px", fontWeight: "bold", letterSpacing: "1px" }}>Your combination has been minted successfully</p>
                                        </div>
                                        <img className='' alt='Preview' style={{ borderRadius: "0", width: "100%" }} src={appContext.imageData} />
                                    </div>
                                </figure>
                                <figcaption className="text-left btnsbtm2" style={{ position: "absolute", bottom: "30px", width: "90%", left: "0", margin: "auto", right: "0" }}>
                                    <div className="img-right-p d-flex justify-content-between ml-auto">
                                        <Link id="back_btn" className="btn btn-bg baCk" to={changePath} style={{ color: "#000" }}>BACK</Link>
                                        <a className="btn" id='mint_btn' href="#myModal2" data-toggle="modal" style={{ color: "#000", backgroundColor: "#FFC83A", border: "2px solid #FFC83A", lineHeight: "45px" }}>Mint</a>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
                <div className="modal-dialog1">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" id="closebtn" data-dismiss="modal" aria-hidden="true">x</button>
                            <div className='popupbox2'>
                                <h2 style={{ color: "#000000", fontSize: "27px", margin: "8%" }}>Would you like to mint using ETH or $SOULS</h2>
                                <div className='text-center d-flex pop_up_preview'>
                                    <button className="soul_ethereum btn" style={{ textTransform: "capitalize", color: "#000000", backgroundColor: "#FFC83A", border: "2px solid #FFC83A", lineHeight: "45px" }} onClick={onClickEthereum}>ETHEREUM</button>
                                    <button className="soul_token btn" style={{ textTransform: "capitalize", color: "#000000", backgroundColor: "#FFC83A", border: "2px solid #FFC83A", lineHeight: "45px" }} onClick={onClickSoul}>$SOULS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WalletConnectModal />
        </div>
    )
}

export default Preview;
