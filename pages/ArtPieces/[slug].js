import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";


export default function artPieceDetail({data}) {
    const router = useRouter();
    const { slug } = router.query;

    const currentArtPiece = data.find((piece) => piece.slug === slug);

    if (!currentArtPiece) {
      return null;
    }

    const { imageSource, artist, name, dimensions } = currentArtPiece;

    return (
      <>
        <Head>
          <title>Detail Page</title>
        </Head>
        <Link href="/ArtPieces">← Back to Gallery</Link>
        <h1>
          {artist} - {name}
        </h1>
        <Image src={imageSource} alt={name} width={dimensions.width/5} height={dimensions.height/5}></Image>
        
      </>
    );
}
//data.dimensions.he