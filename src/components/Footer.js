import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><h1 className="white-shadowed">Contact me: </h1></li>
                        <li><a href="https://github.com/atlc" className="icon fa-github white-shadowed"><span className="label white-shadowed">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/atlc-/" className="icon fa-linkedin white-shadowed"><span className="label white-shadowed">LinkedIn</span></a></li>
                        <li><a href="mailto:andrewlloydcartwright@gmail.com" className="icon fa-envelope-o white-shadowed"><span className="label white-shadowed">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
