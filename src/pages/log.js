import React from 'react'
import { Helmet } from "react-helmet";
import Logout from '../App.js';
import { Link } from "react-router-dom";


function Log({user}) {
    return (  
        <div>
            <Helmet>
                <title>TSA_AGENT: Logs</title>
		        <link rel="stylesheet" href="assets/css/main.css" />
            </Helmet>
            <div id="page-wrapper">
                <div id="header-wrapper">
                    <div className="container">
                            <header id="header">
                                <div className="inner">
                                    <h1><a href="stat.html" id="logo">TSA Agent: </a><span>{user}</span></h1>
                                        <nav id="nav">
                                            <ul>
                                                <li><Link to="/stat">Estadisticas</Link></li>
                                                <li><Link to="/pedido">Pedidos</Link></li>
                                                <li className="current_page_item"><Link to="/log">Logs</Link></li>
                                                <li><a href ="" onClick={Logout}>Cerrar Sesión</a></li>
                                            </ul>
                                        </nav>

                                </div>
                            </header>

                    </div>
                    <div id="main-wrapper">
                        <div className="wrapper style2">
                            <div className="inner">
                                <div className="container">
                                    <div id="content">
                                            <article>
                                                <header className="major">
                                                    <h2>Historial de llamadas.</h2>
                                                </header>

                                                <span className="image featured"><img src="images/pic08.jpg" alt="" /></span>

                                                <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                                                Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                                                Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                                                consequat etiam lorem ipsum dolor sit amet nullam. Phasellus quam turpis,
                                                feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis
                                                eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et
                                                mattis lectus sit amet pulvinar. Nam turpis nisi consequat etiam.</p>

                                                <h3>More intriguing information</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus
                                                justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis,
                                                ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet
                                                vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor.
                                                Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis
                                                rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien.
                                                Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi.
                                                ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet
                                                vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor.
                                                Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis
                                                rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien.
                                                Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi.
                                                Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus lorem ipsum
                                                dolor sit amet phasellus consequat.</p>

                                                <p>Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim
                                                quis hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu.
                                                Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna,
                                                fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium.
                                                Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna,
                                                ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet
                                                vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor.
                                                fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium.
                                                Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu.
                                                Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus sed feugiat lorem ipsum
                                                dolor nullam blandit tempus.</p>
                                            </article>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.dropotron.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>      
            </div>
        </div>
    )
}

export default Log;