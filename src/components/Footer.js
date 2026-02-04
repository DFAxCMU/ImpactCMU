import React from 'react';
import slack from "../components/2026img/streamline-logos_slack-logo.svg";
import instagram from "../components/2026img/instagram-logo-2-solid.svg";
import email from "../components/2026img/fontisto_email.svg";
import calendar from "../components/2026img/quill_calendars.svg";

const Footer = () => (
    <section id="footer">
        <footer className="footer">
            <a href="https://www.instagram.com/impact.cmu/" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://calendar.google.com/calendar/u/4?cid=Y2FybmVnaWVtZWxsb25AZGVzaWduZm9yYW1lcmljYS5jb20" target="_blank">
                <div className="col">
                    <img src={calendar} alt="Calendar" id="quill-calendar" />
                </div>
            </a>
            <a href="mailto:impactcmu.dfa@gmail.com">
                <img src={email} alt="Email" />
            </a>
            <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q" target="_blank">
                <img src={slack} alt="Slack" />
            </a>
        </footer>
    </section>
)

export default Footer;
