interface IDescription {
  description: string;
}

export default function ServiceDescription({ description }: IDescription) {
  return (
    <p className="mt-2 text-sm">{description}</p>
  )
}