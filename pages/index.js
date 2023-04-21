import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces";
import Image from "next/image";
import Spotlight from "../Components/Spotlight.js";
import Navigation from "@/Components/Navigation";

export default function SpotlightPage({data, pieces} ) {

  return (
    <div> 
  
      <h1>Art Gallery</h1>
      
      <Spotlight data={data}/>
   
    </div>
  );
}


// <ArtPieces pieces={data}/>



