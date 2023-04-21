import ArtPieces from "../../Components/ArtPieces";
import Navigation from "@/Components/Navigation";

export default function artpiecesPage({pieces, data}) {
    return (
        <>
        <h1>Art Gallery:</h1>
        <ArtPieces pieces={data}/>
        </>
    );
}



// "../Components/ArtPieces";