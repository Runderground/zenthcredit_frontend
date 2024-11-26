 import React from 'react'


 interface ModalDescription {
   text: React.ReactNode
 }

 export default function ModalTitle({text}: ModalDescription) {
   return (
     <span>{text}</span>
   )
 }