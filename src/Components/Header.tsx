import React, { useState } from 'react';

import '../Styles/Header.css';

// const [pageContent, setPageContent] = useState();

function Header() {
    return (
        <div className="root">
            <button className="headerButton">Projects</button>
            <button className="headerButton">Skills</button>
            <button className="headerButton">About Me</button>
        </div>
    );
}

export default Header;