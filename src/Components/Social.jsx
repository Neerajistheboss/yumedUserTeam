import React from "react";
// import { NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import './Social.css';

const Social = () => {

    return (
        <>
            <footer className="container-fluid text-center">
                <div className="social_media p-3 text-light">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yumedic1/"> <FacebookIcon className="icon_f" /> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/the-hello-doctor"> <LinkedInIcon className="icon_l" /> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yumedic/"> <InstagramIcon className="icon_i" /> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/YumedicD?s=09"> <TwitterIcon className="icon_t" /> </a>
                    {/* <a href="/e"> <YouTubeIcon className="icon_y" /> </a> */}
                </div>
                <div className="text-white p-3"> &#x00A9; 2020 YuMedic. All Rights Reserved | Terms and Condition Apply </div>
            </footer>
        </>
    );
};
export default Social;