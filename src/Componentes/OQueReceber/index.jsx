import React from 'react'
import style from './oquereceber.module.css'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { BsFileText, BsFillCreditCardFill } from 'react-icons/bs';
import { MdOutlineGroups2 } from 'react-icons/md';
import Botao from '../Botao'

export default function OQueReceber() {
  return (
    <main className={style.conteudo__receber}>
      <h2>O que você vai receber?</h2>
      <section className={style.container__recebidos}>
        <li className={style.recebidos}>
          <TbDeviceMobileMessage size={40} className={style.icones} />
          <p>Acompanhamento pelo whatsapp</p>
        </li>
        <li className={style.recebidos}>
          <AiOutlineShoppingCart size={40} className={style.icones} />
          <p>Acesso as melhores promoções</p>
        </li>
        <li className={style.recebidos}>
          <TbDeviceMobileMessage size={40} className={style.icones} />
          <p>Aulas gravadas do zero ao avançado</p>
        </li>
        <li className={style.recebidos}>
          <HiOutlineChatBubbleOvalLeftEllipsis size={40} className={style.icones} />
          <p>Suporte 24/7</p>
        </li>
        <li className={style.recebidos}>
          <BsFileText size={40} className={style.icones} />
          <p>Estratégias copiar e colar</p>
        </li>
        <li className={style.recebidos}>
          <MdOutlineGroups2 size={40} className={style.icones}/>
          <p>Grupo de Networking</p>
        </li>
        <li className={style.recebidos}>
          <BsFillCreditCardFill size={40} className={style.icones} />
          <p>Bônus Ebook dos Cartões</p>
        </li>
      </section>
      <section className={style.container__imagem__recebidos}>
        <img src="https://bolsastart.com/clube/wp-content/uploads/2023/04/clube-bolsa.jpg" alt="Logo" />
        <section className={style.container__textos__recebidos}>
          <h3>O melhor <strong>Clube</strong> de Milhas do <strong>Brasil</strong></h3>
          <p>Você sabia que milhares de brasileiros perdem dinheiro todos os dias deixando suas milhas expirarem dentro das companhias aéreas?</p>
          <p>É isso mesmo!</p>
          <p>São milhões de milhas que poderiam ser utilizadas para gerar uma renda extra, comprar produtos com desconto ou até mesmo viajar de graça.</p>
          <p>E você já parou para pensar em como pode estar perdendo dinheiro por não saber usar suas milhas de forma estratégica?</p>
        </section>
      </section>
      <Botao>
        Quero Parar de Perder Dinheiro
      </Botao>
    </main>
  )
}
