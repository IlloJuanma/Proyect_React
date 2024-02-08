// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Banner } from '../componentes/Banner'
import { Cards } from '../componentes/Cards'
import Header from '../componentes/Header'
import { Aside } from '../componentes/Aside'
import { Articles } from '../componentes/Articles'
import { Footer } from '../componentes/Footer'

export const RouterPrin = () => {
    return (
        <>
            <Header></Header>
            <main className="wrap">
                <section id="info">
                    <Banner></Banner>
                    <Cards></Cards>
                </section>
                <div className="divPersonal">
                    <Aside></Aside>
                    <BrowserRouter>
                        <Routes>                         
                                <Route path="/" element={<Articles />}></Route>
                                <Route path="*" element={(
                                    <>
                                        <h1>Error 404</h1>
                                        <p>Esta página no existe</p>
                                    </>
                                )} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
