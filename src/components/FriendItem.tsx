import { FriendEntry } from "../types/friend_types";
import { FriendAvatar } from "./FriendAvatar";
import { FriendButton } from "./FriendButton";
import { FriendName } from "./FriendName";

export const FriendItem = ( friend: FriendEntry): JSX.Element => {
    return(
        <div className="FriendRow">
            <FriendAvatar img={friend.img} available={friend.available} />
            <FriendName first_name={friend.first_name} last_name={friend.last_name} statuses={friend.statuses}/>
            <FriendButton {...friend}/>
        </div>
    );
}