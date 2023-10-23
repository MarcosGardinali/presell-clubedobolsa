import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://pay.kiwify.com.br/VdG5Ipf?afid=cxFjPLur" className={style.botao}>{children}</a>
  )
}
