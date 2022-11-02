import { getFriendsList } from "../services/friendService";
import { useQuery } from "react-query";
import { FriendEntry } from "../types/friend_types";
import { FC } from 'react';
import { FriendItem } from "./FriendItem";

export const FriendList: FC = () => {
    const { data, status } = useQuery("friendsList", getFriendsList);
    return(
        <div className="FriendListCard">
            <h1 className="TitleCard">Friends</h1>
            {status === "error" && <p> Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    { data?.map((friend : FriendEntry) => (
                        <FriendItem key={friend._id} {...friend} />
                    ))}
                </div>
            )}
        </div>
    );

};