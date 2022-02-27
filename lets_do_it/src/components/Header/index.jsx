import "./styles.css";

function Header(){
    return (
        <header id='header'>
            <nav id='navbar'>
                <span className='brand'>Let'sDoIt</span>

                <div className='hight-side'>
                    <img src="https://avatars.githubusercontent.com/u/86314443?s=40&v=4" 
                    alt="Caliga Profile" />
                    <div className="profile">
                        <p className="name"> Caliga</p>
                        <p className="welcome-message">Bem vindo(a) ao Let'sDoIt</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
