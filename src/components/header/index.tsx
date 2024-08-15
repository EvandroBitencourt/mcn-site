"use client"
import { useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import {
    Instagram,
    Mail,

} from "lucide-react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Header() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <>
            <header>
                <div className="top">
                    <div className="container p-2 p-md-3 mx-auto text-white d-flex justify-content-between align-items-center">
                        <Link href="mailto:glaucia@mcnsistemas.com.br" className='text-decoration-none'>
                            <div className="d-none d-xl-block text-sm  text-decoration-none text-white">
                                <Mail className="me-2" />
                                glaucia@mcnsistemas.com.br
                            </div>
                        </Link>
                        <div className="ms-md-auto me-md-0 mx-auto">
                            Siga-nos:
                            <Link
                                href="https://www.instagram.com/mcnsistemas/"
                                target="_blank"
                                className="text-white"
                            >
                                <Instagram size={25} className="ms-2 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container p-md-3 p-3">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-md-4 col-12 col-lg-4 mt-2 mt-md-0 text-center text-md-start">
                            {" "}
                            <Link href="/" className="navbar-brand">
                                <Image
                                    src="/assets/images/mcnsistemas-logo.png"
                                    alt="Logo do site"
                                    quality={100}
                                    priority={true}
                                    width={245}
                                    height={100}
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 mt-md-0 d-none d-md-block">
                            <Link href="/assets/download/TeamViewerQS10.exe" className="navbar-brand" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-custom-class="custom-tooltip"
                                data-bs-title="This top tooltip is themed via CSS variables.">

                                <Image
                                    src="/assets/images/mcnsistemas-baixe-o-teamviewer.png"
                                    alt="Logo do site"
                                    quality={100}
                                    priority={true}
                                    width={270}
                                    height={69}
                                    className="img-fluid"

                                />
                            </Link>

                        </div>
                        <div className="col-6 col-md-4 col-lg-4 mt-3 mt-md-0 d-none d-md-block">
                            <div>
                                <Link href="/assets/download/AnyDesk.exe" className="navbar-brand">
                                    <Image
                                        src="/assets/images/mcnsistemas-anydesk-download.png"
                                        alt="Logo do site"
                                        quality={100}
                                        priority={true}
                                        width={217}
                                        height={67}
                                        className="img-fluid"

                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item mx-lg-2 mx-xl-2">
                                    <Link className="nav-link" href="/sobre">
                                        SOBRE NÓS
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        PRODUTOS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Materiais para construção</a></li>
                                        <li><a className="dropdown-item" href="#">Auto peças</a></li>
                                        <li><a className="dropdown-item" href="#">Distribuidoras</a></li>
                                        <li><a className="dropdown-item" href="#">Lojas de Decorações e Presentes</a></li>
                                    </ul>

                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        APLICATIVOS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Mcn Estoque</a></li>
                                        <li><a className="dropdown-item" href="#">Conferencia Carga entrega</a></li>
                                        <li><a className="dropdown-item" href="#">Conferencia mercadoria</a></li>
                                        <li><a className="dropdown-item" href="#">Fotos produtos e Cod Barras</a></li>
                                        <li><a className="dropdown-item" href="#">Vendas Externa Mobile</a></li>
                                        <li><a className="dropdown-item" href="#">BI/Dashboard</a></li>
                                        <li><a className="dropdown-item" href="#">Mcn Ecommerce</a></li>
                                    </ul>

                                </li>


                                <li className="nav-item mx-lg-2 mx-xl-2">
                                    <Link className="nav-link" href="/revenda-autorizada">
                                        REVENDA AUTORIZADA
                                    </Link>
                                </li>

                                <li className="nav-item mx-lg-2 mx-xl-2">
                                    <Link className="nav-link" href="/noticias">
                                        NOTÍCIAS
                                    </Link>
                                </li>

                                <li className="nav-item mx-lg-2 mx-xl-2">
                                    <Link className="nav-link" href="/contato">
                                        CONTATO
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>

    )
}