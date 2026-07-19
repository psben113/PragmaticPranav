import '../Styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="headerNav">
                <a href="#experience" className="headerLink"><span className="navBracket">&lt;</span>Experience<span className="navBracket"> /&gt;</span></a>
                <a href="#projects" className="headerLink"><span className="navBracket">&lt;</span>Projects<span className="navBracket"> /&gt;</span></a>
                <a href="#skills" className="headerLink"><span className="navBracket">&lt;</span>Skills<span className="navBracket"> /&gt;</span></a>
            </nav>
        </header>
    );
}

export default Header;
