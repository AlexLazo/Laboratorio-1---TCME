const logo = "./src/assets/react.svg";

const Header = () => {
    return (
        <>
            <h1 className="text-info text-center">Formularios en React</h1>
            <h5 className="text-info text-center">Brian Alexander Fuentes Lazo</h5>
            <img className="rounded d-block mx-auto" src={logo} />
            <hr></hr>
        </>
    );
}

export default Header;