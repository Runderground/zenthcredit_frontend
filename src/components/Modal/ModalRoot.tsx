import React from 'react'


interface ModalRoot {
  children: React.ReactNode
}

export default function ModalRoot({children}: ModalRoot) {
  return (
    <div className="bg-red-400 w-[100px] h-[100px] fixed inset-0 flex">
      {children}
    </div>
  )
}