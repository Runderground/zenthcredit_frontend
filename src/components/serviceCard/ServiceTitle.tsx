interface ITitle {
  title: string;
}

export default function ServiceTitle({ title }: ITitle) {
  return (
    <h2 className="font-bold text-2xl text-green-400">{title}</h2>
  )
}