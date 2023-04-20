import Image from "next/image";

export default function ArtPieces({data}) {
    return (
        <ul>
            {data.map((data) => (
                
                <li key={data.slug}>{data.name} - {data.artist}
                <Image key={data.slug} src={data.imageSource} alt={data.name} width={20} height={20}></Image>
                 </li>
            ))}
       </ul>
    );
}



/* ----- Test Code Snippets ---------

 <Image key={data.slug} src={data.imageSource} alt={data.name} width={20} height={20}></Image>
const currentArt = data.find((art) => art.slug === slug);

const {slug} = currentArt;

 <Image key={data.slug} src={data.imageSource} alt={data.name} width={20} height={20}></Image>
<Image key={data.slug} src={data.imageSource} alt={data.name} width={20} height={20}></Image>

*/ 