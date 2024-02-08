// import React from 'react'
import { useEffect, useState } from "react"

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        fetch("https://fakestoreapi.com/products/")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                // Índice que marca el final de la extracción. slice extrae hasta, pero sin incluir el final
                // slice(1,4) extrae desde el segundo elemento hasta el cuarto (los elementos con índices 1, 2, y 3).
                // es una manera de elegir cuantos elementos del array de la api mostrar y que no salgan todos de golpe
                setArticles(resultado_final.slice(4,9));
            });
    }

    useEffect(() => {
        getArticles();
    }, []); // En cada cambio

    return (

        <section id="articles">
            <h2>Últimos artículos</h2>
            {articles && articles.map((article) => (
                <article key={article.id}>
                    <div className="datos">
                        <span>Fecha: 08 de Febrero</span>
                        <span>Categoria: {article.category}</span>
                    </div>
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                </article>
            ))}
        </section>
    )
}
