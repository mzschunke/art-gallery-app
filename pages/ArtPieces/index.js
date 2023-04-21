import ArtPieces from "../../Components/ArtPieces";
import Navigation from "@/Components/Navigation";

export default function artpiecesPage({pieces, data}) {
    return (
        <>
        <Navigation />
        <ArtPieces pieces={data}/>
        </>
    );
}



// "../Components/ArtPieces";