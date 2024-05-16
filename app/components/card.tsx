import Link from "next/link";

type CardProps = {
  name: string;
  flags: string;
  path: string;
}

function Card( props : CardProps) {
  const { name, flags, path } = props;
  const link = path.toLowerCase();

  return (
    <div className="flex flex-row max-w-96 items-center bg-white rounded-lg text-black shadow-lg hover:bg-neutral-200">
      <Link href={`/countries/${link}`} className="flex items-center cursor-pointer">
        <img src={flags} alt={name} className="w-[80px] h-[60px] m-4 border-2 rounded-md border-black" />
        <p className="text-md font-bold text-black">{name}</p>
      </Link>
  </div>
  )
}

export default Card