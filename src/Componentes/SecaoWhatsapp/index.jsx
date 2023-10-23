import React from 'react'
import style from './secaowhatsapp.module.css'
import Botao from '../Botao'

export default function SecaoWhatsapp() {
  return (
    <main className={style.conteudo__secao__whatsapp}>
        <img src="https://bolsastart.com/clube/wp-content/uploads/2023/04/smartphone.jpg" alt="Imagem Celular" />
        <section className={style.textos__secao__whatsapp}>
            <h4>Operações divulgadas <strong>diariamente no Whatsapp</strong></h4>
            <p>Além disso, nossa Comunidade exclusiva funciona dentro de um grupo no Whatsapp, que é abastecido todos os dias com as melhores promoções de milhas aéreas e cartões de crédito.</p>
            <p>Novos conteúdos são adicionados sempre que há atualizações no mercado.</p>
            <p>E todas as operações são compartilhadas com o passo a passo para que você possa simplesmente replicar a estratégia e lucrar com ainda mais segurança.</p>
            <Botao>
                Quero Garantir a Minha Vaga e Começar a Lucrar
            </Botao>
        </section>
    </main>
  )
}
