import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function JobRow(){
    return(
        <>
        <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className=" absolute cursor-pointer top-4 right-4">
                <FontAwesomeIcon className="size-4 text-gray-300 " icon={faHeart} />
            </div>
            <div className="flex  grow gap-4">
                <div className="content-center">
                    <Image width={120} height={120}  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="" />
                </div>
                <div className="grow sm:flex">

                   <div className="grow">
                     <div className="text-gray-500 text-sm">Spotify</div>
                    <div className="font-bold text-lg mb-1">Product designer</div>
                    <div className="text-gray-400 text-xs">Remote &middot; Kanpur,India &middot; Full-time</div>
                   </div>
            <div className="content-end text-gray-500 text-sm">
               2 weeks ago
            </div>
                </div>
            </div>
        </div>
        </>
    )
}