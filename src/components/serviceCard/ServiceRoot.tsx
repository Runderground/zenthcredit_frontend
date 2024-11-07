import React from 'react'

interface IRoot {
  children: React.ReactNode;
}

export default function ServiceRoot({ children }: IRoot) {
  return (
    <div className="flex flex-col items-center text-center justify-center w-80 lg:92 p-4 text-slate-500">
      {children}
    </div>
  )
}