import React from 'react'
import style from './conteudo.module.css'
import Botao from '../Botao'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <section className={style.container__titulos__imagem}>
        <section className={style.container__titulo__logo}>
          <img className={style.logo__clube} src="https://bolsastart.com/clube/wp-content/uploads/2023/08/Comunidade-Clube-do-Bolsa.png" alt="Clube do Bolsa" />
          <h1>Transforme o seu <strong>cartão de crédito</strong> em uma <strong>máquina de milhas!</strong></h1>
        </section>
        <img className={style.imagem} src="https://bolsastart.com/clube/wp-content/uploads/2023/08/HERO-compress-1-1024x1003.webp" alt="Foto Clube do Bolsa" />
      </section>
      <h2>Viajar com Milhas Aéreas é possível: Descubra os <strong>segredos do uso inteligente</strong> do Cartão de Crédito!</h2>
      <Botao />
    </main>
  )
}
