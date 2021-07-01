import './header.css';
function Header() {
    // eslint-disable-next-line no-script-url
    const url = '#';
    return (
        <header>
            <nav>
                <ul className="nav__list">
                    <li className="nav__list__item nav__logo">
                        <a className="nav__list__item__tag" href={url}>
                            mmhmm
                        </a>
                    </li>
                    <li className="nav__list__item first__child">
                        <a href={url} className="nav__list__item__tag">
                            Product
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href={url} className="nav__list__item__tag">
                            For Business
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href={url} className="nav__list__item__tag">
                            Pricing
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href={url} className="nav__list__item__tag">
                            About
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href={url} className="nav__list__item__tag">
                            Events
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <a href={url} className="nav__list__item__tag">
                            Blog
                        </a>
                    </li>
                    <li className="nav__list__item">
                        <button>
                            <span>
                                Download
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;