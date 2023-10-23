import React from 'react'
import style from './sobrecomunidade.module.css'
import { BiSolidPlaneTakeOff } from 'react-icons/bi'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Botao from '../Botao'

export default function SobreComunidade() {
    return (
        <main className={style.conteudo__sobre__comunidade}>
            <section className={style.conteudo__sobre__comunidade__cards}>
                <li className={style.card}>
                    <h2><BiSolidPlaneTakeOff size={70} color='#258e3f' /></h2>
                    <p>Viaje Mais</p>
                </li>
                <li className={style.card}>
                    <FaHandHoldingDollar size={70} color='#258e3f' />
                    <p>Aprenda a fazer renda extra</p>
                </li>
                <li className={style.card}>
                    <TbDeviceMobileMessage size={70} color='#258e3f' />
                    <p>Compre produtos com desconto</p>
                </li>
            </section>
            <section>
                <li className={style.lista__comunidade__detalhes}>
                    <AiOutlineCheckCircle size={50} color='#258e3f' />
                    <p>Na Comunidade, você tem acesso ao passo a passo prático para aprender a fazer dinheiro com milhas Aéreas.</p>
                </li>
                <li className={style.lista__comunidade__detalhes}>
                    <AiOutlineCheckCircle size={50} color='#258e3f' />
                    <p>Aulas Simples e diretas ao ponto, com estratégias aplicadas e validadas por mim, e por centenas de alunos.</p>
                </li>
                <li className={style.lista__comunidade__detalhes}>
                    <AiOutlineCheckCircle size={50} color='#258e3f' />
                    <p>Uma Comunidade Exclusiva, com suporte e conteúdos novos, todos os dias.</p>
                </li>
            </section>
            <Botao>
                Quero Entrar Para a Comunidade
            </Botao>
        </main>
    )
}
