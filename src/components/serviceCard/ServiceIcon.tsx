interface IIcon {
  icon: React.ReactNode;
}

export default function ServiceIcon({ icon }: IIcon) {
  return (
    <i className="text-slate-600 mb-4">{icon}</i>
  )
}