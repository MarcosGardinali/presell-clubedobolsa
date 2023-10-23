import React from 'react'
import style from './oqueaprender.module.css'
import foguete from '../assets/foguete.svg'
import Botao from '../Botao'

export default function OQueAprender() {
    return (
        <main className={style.conteudo__aprender}>
            <h3>O que você vai aprender?</h3>
            <section className={style.container__textos__imagens__aprender}>
                <section className={style.container__textos__aprender}>
                    <h4>O Clube do Bolsa é para você!</h4>
                    <p>Aqui, você terá acesso a um curso completo, do básico ao avançado, que te ensinará tudo que precisa saber para lucrar com milhas aéreas.</p>
                    <p>Você aprenderá a usar as milhas para comprar produtos com desconto e revendê-los com lucro.</p>
                    <p>Além de saber a viajar de graça e aproveitar as melhores experiências ao redor do mundo.</p>
                </section>
                <img src={foguete} alt="Foto foguete" />
            </section>
            <Botao>
                Quero Garantir Minha Vaga Agora
            </Botao>
        </main>
    )
}
