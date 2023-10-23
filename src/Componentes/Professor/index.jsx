import React from 'react'
import style from './professor.module.css'

export default function Professor() {
  return (
    <main className={style.conteudo__professor}>
        <h3>Quem é seu professor?</h3>
        <section className={style.container__textos__professor}>
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/04/professor-778x1024.png" alt="Imagem Professor" />
            <section className={style.container__professor__textos}>
                <p>Me chamo João Carvalho, sou casado, tenho 3 filhos.</p>
                <p>Formado em administração, pós graduado em Gestão Financeira.</p>
                <p>Lido com o mercado financeiro ha mais de 15 anos e uso estrategias de milhas há mais de 10 anos.</p>
                <p>Criei o Bolsa Start para ajudar pessoas a cuidarem melhor do seu dinheiro e hoje tenho mais de 850 alunos que estão caminhando rumo a sua liberdade financeira.</p>
            </section>
        </section>
    </main>
  )
}
