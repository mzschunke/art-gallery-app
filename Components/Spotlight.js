import { useState } from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function randomNumber(array) {
    return  array[ Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ data }) {
    const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(data));
    console.log(randomArtpiece);
    
return (
    <div>
        <h1>Random Piece for Inspiration:</h1>
        <FavoriteButton />
        <Image src={randomArtpiece.imageSource} alt={randomArtpiece.name} width={randomArtpiece.dimensions.width/5} height={randomArtpiece.dimensions.height/5}></Image>
    </div>
    );
}


     
