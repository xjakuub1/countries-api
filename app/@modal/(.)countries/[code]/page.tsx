import { Modal } from "./modal";

export default async function countryPage( { params }: { params: { code: string } }) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${params.code}`);
    const country = (await res.json())[0];
  
    return (
        <Modal>
            <div className="text-black">
                <p>{country.name.official}</p>
                <p>{country.capital}</p>
                <p>{country.region}</p>
            </div>
        </Modal>
    )
  }