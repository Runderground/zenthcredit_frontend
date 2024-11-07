interface IDescription {
  description: string;
}

export default function ServiceDescription({ description }: IDescription) {
  return (
    <p>{description}</p>
  )
}