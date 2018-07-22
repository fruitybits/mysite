import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                        <ul id="footerButtons">
                            <li className="fb"><Link to="">Home</Link></li>
                            <li className="fb"><Link to="">Blog</Link></li>
                            <li className="fb"><Link to="">Contact</Link></li>
                            <li className="fb"><Link to="">About</Link></li>
                        </ul>
                </div>
            </footer>
        )
    }
}
export default Footer;