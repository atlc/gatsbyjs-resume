import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>andrew.cartwright</strong></h1>
                    <h1><em>Dev ( ops | elopment )</em></h1>
                    <hr />
                    <p><em>This site is constructed with GatsbyJS, and built and deployed by Jenkins to a LAMP server on DigitalOcean.</em></p>
                    <p><em>Read more about <a href="https://github.com/atlc">@atlc</a> to the side.</em></p>
                    <hr />
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
