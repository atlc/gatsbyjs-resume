import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Andrew Cartwright - Portfolio"
        const siteDescription = "Portfolio site for Andrew Cartwright, of Birmingham, AL"

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
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
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
                        <p>
                            <strong>Devops Engineer</strong>,&nbsp;&nbsp;&nbsp;<em>Hubbard Systems (June 2019 > March 2020)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />- Created a <a href="https://chrome.google.com/webstore/detail/json-or-cobol-to-md-schem/fkenokkcpcdhipimcljpdamfaggbbelh?hl=en-US">Chrome extension</a> to translate {'{'} JSON, COBOL source code, or COBOL linkage files {'}'} into a Markdown table describing the schema to allow direct importation of the table into API documentation
                                <br />- Created CI/CD server with Jenkins and created multiple pipelines to build & deploy various projects
                                <br />- Created a Chocolatey server and automated packaging of the application's components to improve management and deployment to client sites
                                <br />- Created an installation script in PowerShell to manage all the Chocolatey packages in addition to setting system-wide configurations to automate client installs
                                <br />- Created tools with Node to generate millions of records for a sterile dataset
                            </p></article>
                        </p>
                        <p>
                            <strong>Computer Lab Technician</strong>,&nbsp;&nbsp;&nbsp;<em>Jefferson State Community College (July 2018 > August 2019)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />- Maintained four (4) computer labs and approximately twenty (20) classrooms on the top floor
                                <br />- Supported users with all desktop needs, in addition to tutoring & mentoring for programming classes
                                <br />- Wrote multiple batch scripts to resolve common issues students experienced in the labs
                                <br />- Wrote multiple Tampermonkey scripts to monitor networked printers, providing me updates on their statuses, health, and supply quantities.
                            </p></article>
                        </p>
                        <p>
                            <strong>Kennel Technician, Vet Tech Assistant</strong>,&nbsp;&nbsp;&nbsp;<em>Caldwell Mill Animal Clinic (August 2017 > June 2019)</em>
                            <br />
                            <article><p>
                                <br />- <strong>{'{ INSERT BUTTON TO POPUP LIGHTBOX MODAL WITH BEST OF CMAC PICS }'}</strong>
                            </p></article>
                        </p>
                        <p>
                            <strong>Rideshare Driver</strong>,&nbsp;&nbsp;&nbsp;<em>Uber & Lyft (January 2017 > August 2019)</em>
                            <br />
                            <article className="work-item"><p>
                                <br />While operating as a rideshare driver for both services, I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber. Additionally, I implemented a project using a Raspberry Pi3 and RetroPie to create a video game emulation station to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks so that a Mario Kart match (or two) may be finished.
                            </p></article>
                        </p>
                    </section>

                    <section id="projects">
                        <h2>Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

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