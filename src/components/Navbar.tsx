function Navbar(){

    
    return(

    <nav className="main-nav">
        <div className="cta-bar">
            <a href="#contacto" className="cta-link">¡Oferta de Lanzamiento! Contáctanos Ahora</a>
        </div>
        <div className="nav-container">
            <a href="/" className="nav-logo"><img src="logo.png" /></a>
            <div className="nav-links">
                <a href="/#nosotros" className="nav-link">Nosotros</a>
                <a href="/#catalogo" className="nav-link">Catálogo</a>
                <a href="/#contacto" className="nav-link">Contacto</a>
            </div>
        </div>
    </nav>
    );
}

export default Navbar