import React from 'react';
import Helmet from 'react-helmet';

import Swal from 'sweetalert2';
import printJS from 'print-js';
import Layout from '../components/layout';
import retropieVideo from '../assets/images/car_retropie_silent.mp4';
import animalSlideshow from '../assets/images/slideshow.mp4';


class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Andrew Cartwright • Portfolio"
        const siteDescription = "Portfolio site for Andrew Cartwright, of Birmingham, AL"
        let showVid = false;
        let showAnimals = false;

        const displayVid = () => {
            if (showVid) {
                Swal.fire({
                    html:
                        `<div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0;overflow: hidden;">
                        <video style="position: absolute;top:0;left: 0;width: 100%;height: 100%;" controls><source src="${retropieVideo}" type="video/mp4"></video>    
                    </div>`,
                    width: '75vw',
                    height: '75vh',
                    confirmButtonText: 'Neat!',
                    footer: 'All the originals were gone, so these photos will have mixed aspect ratios since they were stripped from my various social media and coerced into the same output',
                    onClose: () => showVid = !showVid
                });
            }
        }

        const displayAnimals = () => {
            if (showAnimals) {
                Swal.fire({
                    html:
                        `<div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0;overflow: hidden;">
                        <video style="position: absolute;top:0;left: 0;width: 100%;height: 100%;" controls><source src="${animalSlideshow}" type="video/mp4"></video>    
                    </div>`,
                    width: '75vw',
                    height: '75vh',
                    confirmButtonText: 'Neat!',
                    onClose: () => showAnimals = !showAnimals
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
                    ignoreElements: ['displayAnimalsButton', 'displayRetropieButton', 'printignore01', 'printignore02', 'printignore03', 'printignore04', 'printignore05', 'projects', 'experimental']
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
                            <h2>Andrew Cartwright / Full-stack Javascript Developer</h2>
                        </header>
                        <p>This site is built with GatsbyJS and deployed by Jenkins to a LAMP server on DigitalOcean. Read more about me below.</p>
                        <ul className="actions">
                            <li><a href="#education" className="button 3u">Education</a></li>
                            <li><a href="#experience" className="button 3u">Experience</a></li>
                            <li><a href="#certifications" className="button 3u">Certifications</a></li>
                            <li><a href="#projects" className="button 3u">Portfolio</a></li>
                        </ul>
                    </section>
                    <hr className="hr-thicc" />
                    <br />
                    <div id="printable-area">
                    <section id="education">
                        <h2>Education</h2>
                        <hr className='hr-thin' />
                        <p><strong>Full-stack JS Antidegree</strong>,&nbsp;&nbsp;&nbsp;<em>Covalence.io (2020 > Present)</em><br /></p>
                        <p><strong>A.S. Mathematics, & A.S. Physics</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2020 > Present)</em><br /></p>
                        <p>
                            <strong>A.A.S. Computer Science – Programming</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2018)</em>
                            <article className="work-item"><p><br />• The 2016 recipient of the College Scholar’s Award<br />• Participated on the Scholar’s Bowl team for 5 semesters, captaining for 3, and finishing my career as the second highest scorer in school history.<br />• Full tuition scholarship</p></article>
                        </p>
                    </section>
                    <br id="printignore05" />
                    <section id="experience">
                        <h2>Experience</h2>
                        <hr className='hr-thin' />
                        <div>
                            <h3><strong>Devops Engineer</strong>,&nbsp;&nbsp;&nbsp;<em>Hubbard Systems (June 2019 > March 2020)</em></h3>
                            <article className="work-item">
                                <br />• Spearheaded the founding of the Devops department and automating and improving internal processes where needed
                                <br />• Created CI/CD environment with Jenkins and created multiple pipelines to build & deploy various projects • from compiling multiple COBOL backends to building the Electron-React frontend
                                <br />• Created a <a href="https://chrome.google.com/webstore/detail/json-or-cobol-to-md-schem/fkenokkcpcdhipimcljpdamfaggbbelh?hl=en-US">Chrome extension</a> to translate {'{'} JSON, COBOL source code, or COBOL linkage files {'}'} into a Markdown table describing the schema to allow rapid importation of the table into our API documentation
                                <br />• Created an API documentation environment using SlateDocs, extending the functionality to allow deeper nesting with modification of their Ruby backend; had PR merged to fix bug in the main Slate base
                                <br />• Created a Chocolatey server and automated packaging of the application's components to improve management and deployment to client sites
                                <br />• Created an installation script in PowerShell to manage all the Chocolatey packages in addition to setting system-wide configurations to automate client installs
                                <br />• Created tool with Node to generate millions of records for importing to create a sterile dataset
                            </article>
                        </div>
                        <br />
                        <div>
                            <h3><strong>Computer Lab Technician</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (July 2018 > August 2019)</em></h3>
                            <article className="work-item">
                                <br />• Maintained four (4) computer labs and approximately twenty (20) classrooms on the top floor
                                <br />• Supported users with all desktop needs, in addition to tutoring & mentoring for programming classes
                                <br />• Wrote multiple batch scripts to resolve common issues students experienced in the labs
                                <br />• Wrote multiple Tampermonkey scripts to monitor networked printers, providing me updates on their statuses, health, and supply quantities.
                                <br />
                            </article>
                        </div>
                        <br />
                        <div>
                        <br />
                            <h3><strong>Kennel Technician</strong>,&nbsp;&nbsp;&nbsp;<em>Caldwell Mill Animal Clinic (August 2017 > June 2019)</em></h3>
                            <article className="work-item">
                                <br />• Responsibilities included day-to-day upkeep of the clinic, and care for the animals present for boarding, including: preparing and feeding the animals with their required diet, walking the dogs to ensure they are adequately exercised and socialized, giving baths with medical services, and assisting the veterinarians and the veterinary technicians in their daily roles as needed.
                            </article>
                            <button className="button" id="displayAnimalsButton" onClick={() => { showAnimals = true; displayAnimals() }}>See some of CMAC's cutest critters (and mine)!</button>
                        </div>
                        <br id="printignore03" />
                        <br id="printignore04" />
                        <div>
                            <h3><strong>Rideshare Driver</strong>,&nbsp;&nbsp;&nbsp;<em>Uber & Lyft (January 2017 > August 2019)</em></h3>
                            <article className="work-item">
                                • While operating as a rideshare driver for both services, I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber. Additionally, I implemented a project using a Raspberry Pi and RetroPie to create a video game emulation station to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks so that a Mario Kart match (or two) may be finished.
                            </article>
                            <button className="button" id="displayRetropieButton" onClick={() => { showVid = true; displayVid() }}>See Mario Kart in a car!</button>
                        </div>
                    </section>
                    <br id="printignore02" />
                    <br id="printignore01" />
                    <section id="certifications">
                        <h2>Certifications</h2>
                        <hr className='hr-thin' />
                        <h4>CompTIA</h4>
                        <article className="work-item">
                            • CompTIA Healthcare IT Technician <a href="https://www.certmetrics.com/comptia/public/verification.aspx">(License: CTJDLDWN2KVEK52F)</a>
                        </article>
                        <h4>Microsoft</h4>
                        <article className="work-item">
                            • MTA: Software Development Fundamentals <a href="https://www.youracclaim.com/badges/2bdeff35-cf12-4228-af03-e3485a0c60d8">(Verification)</a>
                            <br />• MTA: Database Fundamentals <a href="https://www.youracclaim.com/badges/ddfa48f5-981f-445c-a16b-0adfecd18f6d">(Verification)</a>
                            <br />• MTA: Security Fundamentals <a href="https://www.youracclaim.com/badges/91a09b81-4a76-448a-be2c-7ea49551e31b">(Verification)</a>
                            <br />• Microsoft Certified: Azure Fundamentals <a href="https://www.youracclaim.com/badges/7a047bb7-b2eb-4df2-88b0-cf1d6459f7c1">(Verification)</a>
                        </article>
                    </section>
                    <br />
                    <section id="projects">
                        <hr className='hr-thin' />
                        <h2>Projects</h2>
                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>
                    <div id="experimental" className="align-right">
                        <br /><br /><br />
                        <hr className='hr-thin' />
                        <ul className="actions">
                            <li><strong>Experimental features:</strong></li>
                            <li><button className="button 4" onClick={() => printPageToPDF()}>Printable resume</button></li>
                            <li><button className="button 4" onClick={() => printPageToPDF()}>Toggle dark mode</button></li>
                        </ul>
                    </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex