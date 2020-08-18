import React from 'react';
import Helmet from 'react-helmet';
import Swal from 'sweetalert2';
import Layout from '../components/layout';
import retropieVideo from '../assets/images/car_retropie_silent.mp4';
import animalSlideshow from '../assets/images/slideshow.mp4';
import anglerfish from '../assets/images/anglerfish.mp4';
import heartSleeve from '../assets/images/HeartSleeve01.jpg';
import arcade from '../assets/images/arcade.mp4';
import officeDoor from '../assets/images/office-door.mp4';

class HomeIndex extends React.Component {
    componentDidMount() {
        import('print-js')
        .then((printJS) => this.printJS = printJS);
    }

    render() {
        const siteTitle = "Andrew Cartwright - Portfolio"
        const siteDescription = "Portfolio site for Andrew Cartwright, of Birmingham, AL"
        let showMedia = false;

        const displayMedia = (media, isVideo, footerText) => {
            if (showMedia) {
                Swal.fire({
                    html:
                    `<div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0;overflow: hidden;">
                        ${isVideo ? `<video style="position: absolute;top:0;left: 0;width: 100%;height: 100%;" controls><source src="${media}" type="video/mp4"></video>` : `<img src=${media} />`}    
                    </div>`,
                    width: '75vw',
                    height: '75vh',
                    footer: footerText || '',
                    confirmButtonText: 'Neat!',
                    onClose: () => showMedia = !showMedia
                });
            }
        }

        const printPageToPDF = () => {
            Swal.fire({
                icon: 'warning',
                text: 'This resume is experimentally generated using PrintJS. Compatibility between browsers and OSes will vary greatly.'
            }).then((result) => {
                printJS({
                    printable: 'printable-area',
                    type: 'html',
                    header: 
                        `<h2>Andrew Cartwright / Full-stack Javascript Developer</h2>
                        <p>❴ andrewlloydcartwright@gmail.com， https://github.com/atlc， https://www.linkedin.com/in/atlc-/ ❵</p>
                        <hr className='hr-thin' />`,
                    ignoreElements: ['displayAnimalsButton', 'displayRetropieButton', 'displayAnglerfishButton', 'displayArcadeButton', 'displayHeartButton', 'displayDoorButton', 'experimental', 'printignore01', 'printignore02', 'printignore03', 'printignore04', 'printignore05']
                })
            });
        }

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="intro">
                        <header className="major">
                            <h2>Andrew Cartwright</h2>
                            <h4>Well-rounded entry-level IT & software profession, currently studying towards becoming a full-stack JS developer with an eventual goal of working in data analytics.</h4>
                        </header>
                        <hr />
                        <ul className="actions">
                            <li><a href="#education" className="button 3u">Education</a></li>
                            <li><a href="#experience" className="button 3u">Experience</a></li>
                            <li><a href="#certifications" className="button 3u">Certifications</a></li>
                            <li><a href="#projects" className="button 3u">Projects</a></li>
                        </ul>
                    </section>
                    <hr className="hr-thin" />
                    <br />
                    <div id="printable-area">
                    <section id="education">
                        <h2>Education</h2>
                        <hr />
                        <p><strong>Full-stack JS Antidegree</strong>,&nbsp;&nbsp;&nbsp;<em>Covalence.io (2020 > Present)</em><br /></p>
                        <p><strong>A.S. Mathematics, & A.S. Physics</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2020 > Present)</em><br /></p>
                        <p>
                            <strong>A.A.S. Computer Science – Programming</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2018)</em>
                            <article className="work-item"><br />► The 2016 recipient of the College Scholar’s Award<br />► Participated on the Scholar’s Bowl team for 5 semesters, serving as captain for 3</article>
                        </p>
                    </section>
                    <hr className='hr-thin' />
                    <section id="experience">
                        <h2>Experience</h2>
                        <hr />
                        <div>
                            <h3 className="align-center"><strong>Hubbard Systems</strong></h3>
                            <h4 className="align-center"><em>Devops Engineer (June 2019 > March 2020)</em></h4>
                            <article className="work-item">
                                ► Spearheaded the founding of the Devops department and automating and improving internal processes where needed
                                <br />► Created CI/CD environment with Jenkins and created multiple pipelines to build & deploy various projects - from compiling multiple COBOL backends to building the Electron-React frontend
                                <br />► Created a <a href="https://chrome.google.com/webstore/detail/json-or-cobol-to-md-schem/fkenokkcpcdhipimcljpdamfaggbbelh?hl=en-US">Chrome extension</a> to translate {'{'}JSON, COBOL source code, or COBOL linkage files{'}'} into a Markdown table describing the schema to allow rapid importation of the table into our API documentation
                                <br />► Created an API documentation environment using SlateDocs, extending the functionality to allow deeper nesting with modification of their Ruby backend; had PR merged to fix bug in the main Slate base
                                <br />► Created a Chocolatey server and automated packaging of the application's components to improve management and deployment to client sites
                                <br />► Created an installation script in PowerShell to manage all the Chocolatey packages in addition to setting system-wide configurations to automate client installs
                                <br />► Created tool with Node to generate millions of records for importing to create a sterile dataset
                            </article>
                            <h4 className="align-center"><em>Application Systems Analyst (November 2015 > May 2016)</em></h4>
                            <article className="work-item">
                                ► Trained and assisted clients in daily usage of accounting application
                                <br />► Outside of application support, I was involved with SQL Server, Windows & Linux server administration
                            </article>
                        </div>
                        <hr />
                        <div>
                            <h3 className="align-center"><strong>Jefferson State Community College</strong></h3>
                            <h4 className="align-center"><em>Computer Lab Technician (July 2018 > August 2019)</em></h4>
                            <article className="work-item">
                                ► Maintained four (4) computer labs and approximately twenty (20) classrooms on the top floor
                                <br />► Supported users with all desktop needs, in addition to tutoring & mentoring for programming classes
                                <br />► Wrote multiple batch scripts to resolve common issues students experienced in the labs
                                <br />► Wrote multiple Tampermonkey scripts to monitor networked printers, providing me updates on their statuses, health, and supply quantities.
                            </article>
                        </div>
                        <hr />
                        <div>
                            <h3 className="align-center"><strong>Vincari</strong></h3>
                            <h4 className="align-center"><em>Software Developer (May 2016 > February 2017)</em></h4>
                            <article className="work-item">
                                ► Created new features and fixed existing bugs for EMR/Operative documentation webapp on a stack of Ruby on Rails, Angular.js, and MySQL
                                <br />► Worked on infrastructure within AWS, primarily in EC2, VPCs, and with S3.
                                <br />► Created a logging/analytics framework using SumoLogic in order to give our Implementation & Support teams a tool with which they could easily assist clients.While operating as a rideshare driver for both services, I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber. Additionally, I implemented a project using a Raspberry Pi and RetroPie to create a video game emulation station to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks so that a Mario Kart match (or two) may be finished.
                            </article>
                        </div>
                        <hr />
                        <div>
                            <h3 className="align-center"><strong>Miscellaneous</strong></h3>
                            <article className="work-item">
                                ► <em>Caldwell Mill Animal Clinic, Kennel Technician (August 2017 > June 2019)</em>: Responsibilities included day-to-day upkeep of the clinic, and care for the animals present for boarding, including: preparing and feeding the animals with their required diet, walking the dogs to ensure they are adequately exercised and socialized, giving baths with medical services, and assisting the veterinarians and the veterinary technicians in their daily roles as needed. <br /> <button className="button" id="displayAnimalsButton" onClick={() => { showMedia = true; displayMedia(animalSlideshow, true, 'The originals of these images were lost, so all of them were stripped from my social media and forced into the same aspect ratio when generating the slideshow, apologies for the distortions.') }}>See some of CMAC's cutest critters (and mine)!</button>
                                <br />► <em>Uber & Lyft, Rideshare Driver (January 2017 > August 2017)</em>: While operating as a rideshare driver for both services, I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber. Additionally, I implemented a project using a Raspberry Pi and RetroPie to create a video game emulation station to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks so that a Mario Kart match (or two) may be finished. <br /><button className="button" id="displayRetropieButton" onClick={() => { showMedia = true; displayMedia(retropieVideo, true) }}>See Mario Kart in a car!</button>
                                <br />► <em>Greystone Golf & Country Club – Server, Bartender, Event Staff (Apr 2011 > Nov 2015)</em>
                            </article>
                        </div>
                    </section>
                    <hr className='hr-thin' />
                    <section id="certifications">
                        <h2>Certifications</h2>
                        <hr />
                        <h4>CompTIA</h4>
                        <article className="work-item">
                            ► CompTIA Healthcare IT Technician <a href="https://www.certmetrics.com/comptia/public/verification.aspx">(License: CTJDLDWN2KVEK52F)</a>
                        </article>
                        <h4>Microsoft</h4>
                        <article className="work-item">
                            ► MTA: Software Development Fundamentals <a href="https://www.youracclaim.com/badges/2bdeff35-cf12-4228-af03-e3485a0c60d8">(Verification)</a>
                            <br />► MTA: Database Fundamentals <a href="https://www.youracclaim.com/badges/ddfa48f5-981f-445c-a16b-0adfecd18f6d">(Verification)</a>
                            <br />► MTA: Security Fundamentals <a href="https://www.youracclaim.com/badges/91a09b81-4a76-448a-be2c-7ea49551e31b">(Verification)</a>
                            <br />► Microsoft Certified: Azure Fundamentals <a href="https://www.youracclaim.com/badges/7a047bb7-b2eb-4df2-88b0-cf1d6459f7c1">(Verification)</a>
                        </article>
                    </section>
                    <br />
                    <section id="projects">
                        <hr className='hr-thin' />
                        <h2>Projects</h2>
                        <hr />
                        <h4>Browser Extensions/Scripts</h4>
                        <article className="work-item">
                            ► <a href="https://github.com/atlc/shitpostify">json-or-cobol-to-md-schema</a>:  This extension allows one to select a body of JSON, our COBOL source code (either a raw file or a linkage library), or just a regular object, and would parse through those bodies, extract the table, and would return a string of Markdown text with a table describing that endpoint/object's schema. This allowed us to paste the Markdown into API documentation instantly, instead of having to write those by hand, saving us an incalculable amount of time for an application with over 300 endpoints, dozens of which that had hundreds of fields. Despite the very niche and almost propriety application of it (though remaining fully open-source), it still manages to maintain over 35 active users on the <a href="https://chrome.google.com/webstore/detail/json-or-cobol-to-md-schem/fkenokkcpcdhipimcljpdamfaggbbelh">Chrome Web Store</a>.
                            <br />► <a href="https://github.com/atlc/shitpostify">Shitpostify</a>: The (in)appropriately named extension allows one to select a body of text, right click it, transform the text into an emoji-laden nightmare, and attach the transformed text to the clipboard. It maintains over 40 active users on the <a href="https://chrome.google.com/webstore/detail/shitpostify/dojihbiflikelfjnoaljoeiklhgdnijp">Chrome Web Store</a>.
                            <br />► <a href="https://github.com/atlc/Tampermonkey-Scripts/blob/master/PrintMonitorMaster.js">Miscellaneous scripts for Jeff State</a>: I created a handful of Tampermonkey scripts to monitor the networked printers in the surrounding labs, allowing me to be proactive & quickly reactive about issues that may arise. 
                            <br />► <a href="https://github.com/atlc/Tampermonkey-Scripts/blob/master/ChaosProTips.js">ChaosProTips</a>: Just for fun, a userscript for Reddit that stripped out all identifying information when viewing a multireddit of multiple *ProTip subreddits, including "IllegalLifeProTips", "LifeProTips", "ShittyLifeProTips", and "UnethicalLifeProTips". Had a feature to randomize the instances of their abbreviations in the titles for maximum chaos. Written with compatibility for both the new reddit redesign and the classic design.
                        </article>
                        <h4 id="arduino">Arduino</h4>
                        <article className="work-item">
                            ► <a href="https://github.com/atlc/WearMyHeartOnMySleeve">WearMyHeartOnMySleeve</a>: This was my first introduction to Arduino - a Halloween costume where I had planned to have a heart monitor display my current pulse on my sleeve. I ran into issues with the sensor's sensitivity, so the numbers were instead fudged since I started the project the week of the party. <br /> <button id="displayHeartButton" className="button" onClick={() => { showMedia = true; displayMedia(heartSleeve, false) }}>See the costume here!</button>
                            <br />► <a href="https://github.com/atlc/Halloween18">The (Halloween) Anglerfish</a>: This was definitely a step up in project awesomeness. My partner and I each had our own giant grotesque Anglerfish costumes with some fun light shows due to the awesomeness of neopixels. We won a handful of costume contests, including one where we won a cruise to Mexico (the background image was taken from visiting Dzibilchaltún)!<br /> <button className="button" id="displayAnglerfishButton" onClick={() => { showMedia = true; displayMedia(anglerfish, true) }}>See her costume here (with mine in the background)!</button>
                            <br />► <a href="https://github.com/atlc/Halloween18">The (Halloween) Arcade</a>: In our second year of sweeping Birmingham costume contests, my partner and I /were/ arcade games - she was WhacAMole and I was a crane game. <br /> <button id="displayArcadeButton"  className="button" onClick={() => { showMedia = true; displayMedia(arcade, true) }}>See both costumes here, mostly finished!</button>
                            <br />► <a href="https://github.com/atlc/JSCC-Doors-2018/blob/master/Me/Door.ino">Stranger Things office door contest</a>: Created a Stranger Things-themed "alphabet light" with Neopixels for a Christmas door-decoration contest that would spell out ‘JEFF STATE’ and then return to randomized colors to help advertise JSCC's C++ course. <br /> <button id="displayDoorButton" className="button" onClick={() => { showMedia = true; displayMedia(officeDoor, true) }}>See the door!</button>
                        </article>
                        <h4>Open-source contributions</h4>
                        <article className="work-item">
                            ► <a href="https://github.com/slatedocs/slate">Slate</a> (and Slant/Shins): Had <a href="https://github.com/slatedocs/slate/issues/1119">my pull request merged</a> to fix a small bug where increasing levels of title nesting would add HTML tags to the title bar. I also opened up a PR in <a href="https://github.com/Mermade/shins">shins</a> (which was the Node.js port for Slate, now deprecated for <a href="https://github.com/Mermade/slant/">slant</a>), where it was merged downstream.
                            <br />► <a href="https://github.com/jcarbaugh/python-roku/">python-roku</a>: I kept losing the remote to my TV, a classic dilemma. I solved it the way an aspiring developer would solve such an issue - finding a commandline project! The project I found worked great, except for the fact that controls were not iterable, forcing one to call a command many times over if needed. I submitted a <a href="https://github.com/jcarbaugh/python-roku/pull/55/files">pull request</a> to allow certain methods to accept integer parameters of iteration cycles. Though unmerged, it did generate good discussion and the primary developer liked the idea.
                        </article>
                        <h4>Miscellaneous Demos</h4>
                        <article className="work-item">
                            ► <a href="https://atlc.github.io/dicey-ts-business/build/">Dicey Business (playable demo)</a>: This was a lab of mine for the Covalence bootcamp, with <a href="https://github.com/atlc/dicey-ts-business/">my solution being written in Typescript</a>. A simple OOP exercise for creating a dice generator with fun special click events. I added in a bonus feature to activate a secret 'd20' mode.
                            <br />► <a href="https://atlc.github.io/typescript-up-or-shape-out/build/">Shape Up or Shape Out (playable demo)</a>: This was another Covalence lab that <a href="https://github.com/atlc/typescript-up-or-shape-out">I wrote in in OOP-based Typescript</a>. A drawing canvas appears; you enter in a shape's dimensions, it validates the dimensions and draws it on the canvas. Single click to get that shape's information in the sidebar, double click to destroy the shape. I also tried out writing with JSDocs for the first time and have the lab <a href="https://github.com/atlc/typescript-up-or-shape-out/tree/master/docs">pretty well-documented here</a>.
                        </article>
                    </section>
                    <div id="experimental" className="align-right">
                        <br /><br /><br />
                        <hr className='hr-thin' />
                        <ul className="actions">
                            <li><strong>Experimental features:</strong></li>
                            <li><button className="button 4" onClick={() => printPageToPDF()}>Printable resume</button></li>
                            <li><button className="button 4" disabled="disabled" onClick={() => printPageToPDF()}>[In-progress] Toggle dark mode</button></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex