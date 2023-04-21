import Image from "next/image";

export default function ArtPieces({pieces}) {
    return (
        <ul>
            {pieces.map((data) => (
                <li key={data.slug}>
                <Image key={data.slug} src={data.imageSource} alt={data.name} width={20} height={20}></Image>
                {" "}{data.name} | {data.artist}
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