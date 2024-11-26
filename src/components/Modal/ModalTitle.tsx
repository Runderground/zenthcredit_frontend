import React from 'react'


interface ModalRoot {
  text: React.ReactNode
}

export default function ModalTitle({text}: ModalRoot) {
  return (
    <h1 className="text-2xl font-semibold text-slate-800">{text}</h1>
  )
}