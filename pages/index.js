import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces";
import Image from "next/image";
import Spotlight from "../Components/Spotlight.js";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  //console.log(data);
  

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data}/>
      <Spotlight data={data}/>
    </div>
  );
}








