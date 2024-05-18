export default async function countryPage( { params }: { params: { code: string } }) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${params.code}`);
  const country = (await res.json())[0];
  console.log(country)

  return (
    <div className="text-black">{country.name.official}</div>
  )
}