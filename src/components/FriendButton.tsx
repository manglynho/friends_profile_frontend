
import { Link } from "react-router-dom";
import { FriendEntry } from "../types/friend_types";
export const FriendButton = ( friend: FriendEntry) : JSX.Element => {
    return(
        <div className="FriendButton">
            <Link className="ButtonDetails" to={`/friend/${friend._id}`} state={{friend: friend}}>
                 Details
            </Link>
        </div>
    );
}