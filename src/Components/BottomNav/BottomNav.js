import React from 'react';
import './BottomNav.css';
import { Footer } from 'react-materialize';

const BottomNav = () => (
    <div>
        <Footer copyrights="&copy 3015 Copyright Text"
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            }
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3 OtherWebsite">Other Websites</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.digitalaltitudereceiver.com/">FTC vs. Digital Altitude, LLC</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.carolinareceivership.com/">SEC vs. Carolina Development Co., Inc.</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.medicalcapitalreceivership.com/">SEC vs. Medical Capital</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.pdcreceiver.com/">SEC vs. PDC Capital Group, LLC</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.sbcapitalreceiver.com/">SEC vs. Small Business Capital Corp.</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://www.totalwealthreceiver.com/">SEC vs. Total Wealth Management, Inc.</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://usfiareceiver.com/">SEC vs. USFIA, Inc.</a></li>
                </ul>
            }
            className='example'
        >
            <h5 className="white-text">Thomas Seaman Company</h5>
            <p className="grey-text text-lighten-4">Orange Country Judical Reciever</p>
        </Footer>
    </div>
);

export default BottomNav;