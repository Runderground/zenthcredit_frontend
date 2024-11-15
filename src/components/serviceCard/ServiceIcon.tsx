interface IIcon {
  icon: React.ReactNode;
}

export default function ServiceIcon({ icon }: IIcon) {
  return (
    <i className="text-slate-600 mb-4 text-green-400">{icon}</i>
  )
}