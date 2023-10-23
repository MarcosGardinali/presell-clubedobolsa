import React from 'react'
import style from './valor.module.css'
import Botao from '../Botao'

export default function Valor() {
  return (
    <main className={style.conteudo__valor}>
        <h2>Não deixe essa oportunidade passar!</h2>
        <section className={style.card__valor}>
          <img src="https://bolsastart.com/clube/wp-content/uploads/2023/04/logo-clube-do-bolsa.png" alt="Logo" />
          <h3>12x R$ <strong>49,90</strong></h3>
          <p>ou R$ 497 à vista</p>
          <span><p>1 ano de acesso</p></span>
        </section>
        <Botao>
          Garanta Sua Vaga Com Essa Condição Única
        </Botao>
    </main>
  )
}
