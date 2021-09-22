import './Header.css';

const Header = ({userName}) => {
    return (
        <header>
            <h1>HIOF</h1>
            <p>{userName}</p>
        </header>
    )
}

export default Header;