import React from 'react';
import { Helmet } from "react-helmet";
import Logout from '../App.js';

function Stat({user}){
        return (
            <div>
                <Helmet>
                    <title>TSA_AGENT: Estadisticas</title>
                    <link rel="stylesheet" href="assets/css/main.css" />
                </Helmet>
                <div id="page-wrapper">
                        <div id="header-wrapper">
                            <div class="container">

                                    <header id="header">
                                        <div class="inner">

                                                <h1><a href="stat.html" id="logo">TSA Agent: </a><span>{user}</span></h1>
                                                <nav id="nav">
                                                    <ul>
                                                        <li class="current_page_item"><a href="estadistica.html">Estadisticas</a></li>
                                                        <li><a href="pedido.html">Pedidos</a></li>
                                                        <li><a href="log.html">Logs</a></li>
                                                        <li><a href ="" onClick={Logout}>Cerrar Sesión</a></li>
                                                    </ul>
                                                </nav>
                                        </div>
                                    </header>

                                    <div id="banner">
                                        <h2><strong>TSA Agent</strong>
                                        <br />
                                        Pedidos para colmados
                                        </h2>
                                    </div>

                            </div>
                        </div>

                        <div id="main-wrapper">
                            <div class="wrapper style1">
                                <div class="inner">

                                        <section class="container box feature1">
                                            <div class="row">
                                                <div class="col-12">
                                                    <header class="first major">
                                                        <h2>Estadísticas</h2>
                                                    </header>
                                                </div>
                                                <div class="col-4 col-12-medium">
                                                    <section>
                                                        <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                                                        <header class="second icon solid fa-user">
                                                            <h3>Here's a Heading</h3>
                                                            <p>And a subtitle</p>
                                                        </header>
                                                    </section>
                                                </div>
                                                <div class="col-4 col-12-medium">
                                                    <section>
                                                        <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                                                        <header class="second icon solid fa-cog">
                                                            <h3>Also a Heading</h3>
                                                            <p>And another subtitle</p>
                                                        </header>
                                                    </section>
                                                </div>
                                                <div class="col-4 col-12-medium">
                                                    <section>
                                                        <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                                        <header class="second icon solid fa-chart-bar">
                                                            <h3>Another Heading</h3>
                                                            <p>And yes, a subtitle</p>
                                                        </header>
                                                    </section>
                                                </div>
                                                <div class="col-12">
                                                    <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper
                                                    bibendum ipsum, et tristique augue fringilla eu. Vivamus id risus vel dolor auctor euismod
                                                    quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus mattis lectus sit
                                                    amet pulvinar. Nam nec turpis.</p>
                                                </div>
                                            </div>
                                        </section>

                                </div>
                            </div>
                            <div class="wrapper style2">
                                <div class="inner">
                                        <section class="container box feature2">
                                            <div class="row">
                                                <div class="col-6 col-12-medium">
                                                    <section>
                                                        <header class="major">
                                                            <h2>And this is a subheading</h2>
                                                            <p>It’s important but clearly not *that* important</p>
                                                        </header>
                                                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                                                        Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                                                        Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                                                        consequat etiam.</p>
                                                        <footer>
                                                            <a href="#" class="button medium icon solid fa-arrow-circle-right">Let's do this</a>
                                                        </footer>
                                                    </section>
                                                </div>
                                                <div class="col-6 col-12-medium">
                                                    <section>
                                                        <header class="major">
                                                            <h2>This is also a subheading</h2>
                                                            <p>And is as unimportant as the other one</p>
                                                        </header>
                                                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                                                        Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                                                        Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                                                        consequat etiam.</p>
                                                        <footer>
                                                            <a href="#" class="button medium alt icon solid fa-info-circle">Wait, what?</a>
                                                        </footer>
                                                    </section>
                                                </div>
                                            </div>
                                        </section>

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
        )
}

export default Stat;