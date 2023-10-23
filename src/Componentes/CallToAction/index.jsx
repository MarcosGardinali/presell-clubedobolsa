import React from 'react'
import style from './calltoaction.module.css'
import Botao from '../Botao'

export default function CallToAction() {
  return (
    <main className={style.conteudo__call}>
        <h3>Não perca mais TEMPO</h3>
        <p>Clique no botão abaixo e garanta agora a sua vaga no Clube do Bolsa, pagando menos de <strong>R$ 1,33</strong> por dia.</p>
        <p>Tenha a certeza de que estarei junto contigo em cada etapa do processo, garantindo que você consiga fazer tudo de forma certa, e prestando meu suporte pessoalmente todos os dias na comunidade.</p>
        <p>Junte-se às centenas de alunos que já estão lucrando com milhas <strong>AGORA MESMO!</strong></p>
        <Botao>
            Garanta Sua Vaga Com Essa Condição Única
        </Botao>
    </main>
  )
}
