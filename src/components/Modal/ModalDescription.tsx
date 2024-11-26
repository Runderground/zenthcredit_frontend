 import React from 'react'


 interface ModalDescription {
   text: React.ReactNode
 }

 export default function ModalTitle({text}: ModalDescription) {
   return (
     <span className="text-slate-600">{text}</span>
   )
 }