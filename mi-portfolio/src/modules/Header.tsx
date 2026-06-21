import { TypeAnimation } from "react-type-animation";

function Header() {
    return (
        <header>
            <TypeAnimation sequence={['Portafolio', 2000]}></TypeAnimation>
            <nav>
                <button>Inicio</button>
                <button>Proyectos</button>
                <button>Habilidades</button>
                <button>Contacto</button>
            </nav>
        </header>
    );
}

export default Header;