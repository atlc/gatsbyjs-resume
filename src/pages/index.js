import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout'

import Swal from 'sweetalert2';
import retropieVideo from '../assets/images/car_retropie_silent.mp4';
import animalSlideshow from '../assets/images/slideshow.mp4'


class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Andrew Cartwright - Portfolio"
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

                    <section id="education">
                        <h2>Education</h2>
                        <hr />
                        <p><strong>Full-stack JS Antidegree</strong>,&nbsp;&nbsp;&nbsp;<em>Covalence.io (2020 > Present)</em><br /></p>
                        <p><strong>A.S. Mathematics, A.S. Physics</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2020 > Present)</em><br /></p>
                        <p>
                            <strong>A.A.S. Computer Science – Programming</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (2018)</em>
                            <article className="work-item"><p><br />- The 2016 recipient of the College Scholar’s Award<br />- Participated on the Scholar’s Bowl team for 5 semesters, captaining for 3, and finishing my career as the second highest scorer in school history.<br />- Full tuition scholarship</p></article>
                        </p>
                    </section>

                    <section id="experience">
                        <h2>Experience</h2>
                        <hr />
                        <div>
                            <strong>Devops Engineer</strong>,&nbsp;&nbsp;&nbsp;<em>Hubbard Systems (June 2019 > March 2020)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />- Spearheaded the founding of the Devops department and automating and improving internal processes where needed
                                <br />- Created CI/CD environment with Jenkins and created multiple pipelines to build & deploy various projects - from compiling multiple COBOL backends to building the Electron-React frontend
                                <br />- Created a <a href="https://chrome.google.com/webstore/detail/json-or-cobol-to-md-schem/fkenokkcpcdhipimcljpdamfaggbbelh?hl=en-US">Chrome extension</a> to translate {'{'} JSON, COBOL source code, or COBOL linkage files {'}'} into a Markdown table describing the schema to allow rapid importation of the table into our API documentation
                                <br />- Created an API documentation environment using SlateDocs, extending the functionality to allow deeper nesting with modification of their Ruby backend; had PR merged to fix bug in the main Slate base
                                <br />- Created a Chocolatey server and automated packaging of the application's components to improve management and deployment to client sites
                                <br />- Created an installation script in PowerShell to manage all the Chocolatey packages in addition to setting system-wide configurations to automate client installs
                                <br />- Created tool with Node to generate millions of records for importing to create a sterile dataset
                            </p></article>
                        </div>
                        <div>
                            <strong>Computer Lab Technician</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (July 2018 > August 2019)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />- Maintained four (4) computer labs and approximately twenty (20) classrooms on the top floor
                                <br />- Supported users with all desktop needs, in addition to tutoring & mentoring for programming classes
                                <br />- Wrote multiple batch scripts to resolve common issues students experienced in the labs
                                <br />- Wrote multiple Tampermonkey scripts to monitor networked printers, providing me updates on their statuses, health, and supply quantities.
                            </p></article>
                        </div>
                        <div>
                            <strong>Kennel Technician, Vet Tech Assistant</strong>,&nbsp;&nbsp;&nbsp;<em>Caldwell Mill Animal Clinic (August 2017 > June 2019)</em>
                            <br />
                            <article><p>
                                <br />- <strong>CMAC DESCRIPTION</strong>
                            </p></article>
                            <button className="button" onClick={() => {showAnimals = true; displayAnimals()} }>See some of CMAC's cutest critters (and mine)!</button>
                            <br />
                            <br />
                        </div>
                        <div>
                            <strong>Rideshare Driver</strong>,&nbsp;&nbsp;&nbsp;<em>Uber & Lyft (January 2017 > August 2019)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />While operating as a rideshare driver for both services,
                                I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber.
                                Additionally, I implemented a project using a Raspberry Pi and RetroPie to create a video game emulation station
                                to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks
                                so that a Mario Kart match (or two) may be finished.
                                </p>
                            </article>
                            <button className="button" onClick={() => {showVid = true; displayVid()} }>See Mario Kart in a car!</button>
                        </div>
                    </section>

                    <section id="projects">
                        <h2>Projects</h2>



                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="contact">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex