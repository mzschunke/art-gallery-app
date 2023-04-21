import { useState } from "react";
import Image from "next/image";
 
export default function FavoriteButton() {
    const [active, setActive] = useState(false);
    function handleClick() {
        setActive(!active);
        console.log(active);
//     function toggleLiked(){
//         const [favorite, setFavorite] = useState(false);
//           setFavorite((favorite) => !favorite);
//           console.log(favorite);
         }

    return (
        <>
          <button type="button" onClick={handleClick}>
            <Image src="/heart.svg" alt="Favorite" width={20} height={20}></Image>
</button>
        </>
    );
}



