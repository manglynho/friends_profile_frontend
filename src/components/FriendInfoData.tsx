import { FriendEntry } from "../types/friend_types";
export const FriendInfoData = ( friend: FriendEntry): JSX.Element => {
    return(
        <div className="FriendInfoData">
            <p className="text_muted">Bio:</p>
            <p>{friend.bio}</p>
            <hr />
            <div className="rowItem">
                <div className="infoTitle">
                    <p className="text_muted">Phone:</p>
                </div>
                <div className="infoData">
                    <p>{friend.phone}</p>
                </div>
            </div>
            <hr/>
            <div className="rowItem">
                <div className="infoTitle">
                    <p className="text_muted">Addres:</p>
                    <p className="text_muted">City:</p>
                    <p className="text_muted">State:</p>
                    <p className="text_muted">Zipcode:</p>
                </div>
                <div className="infoData">
                    <p>{friend.address_1}</p>
                    <p>{friend.city}</p>
                    <p>{friend.state}</p>
                    <p>{friend.zipcode}</p>
                </div>
            </div>
        </div>
    );
}