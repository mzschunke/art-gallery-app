import { useState } from "react";
import Image from "next/image";

function randomNumber(array) {
    return  array[ Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ data }) {
    const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(data));
    console.log(randomArtpiece);
    
return (
    <div>
        <h1>Random Piece for Inspiration:</h1>
        <Image src={randomArtpiece.imageSource} alt={randomArtpiece.name} width={400} height={400}></Image>
    </div>
    );
}


     
