import React from 'react'


interface ModalRoot {
  text: React.ReactNode
}

export default function ModalTitle({text}: ModalRoot) {
  return (
    <h1>{text}</h1>
  )
}