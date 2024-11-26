import React from 'react'
import style from './Modal.module.css'

interface ModalRoot {
  children: React.ReactNode;
  modalOpen: boolean;
}

export default function ModalRoot({children, modalOpen}: ModalRoot) {
  if(modalOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80">
        <div className={style.container}>
          {children}
        </div>
      </div>
    )
  }
}