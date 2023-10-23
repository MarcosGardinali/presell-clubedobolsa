import React from 'react'
import style from './resultados.module.css'
import Botao from '../Botao'

export default function Resultados() {
  return (
    <main className={style.conteudo__resultado}>
        <h2>Veja como nossos alunos já estao LUCRANDO</h2>
        <section className={style.cotainer__resultados}>
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_9905.jpg" alt="Resultados" />
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_2258-scaled.jpg" alt="Resultados" />
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_1903-scaled.jpg" alt="Resultados" />
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_1531.jpg" alt="Resultados" />
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_1603.jpg" alt="Resultados" />
            <img src="https://bolsastart.com/clube/wp-content/uploads/2023/05/IMG_0788.jpg" alt="Resultados" />
        </section>
        <Botao>
            Quero Ter Esses Resultados
        </Botao>
    </main>
  )
}
