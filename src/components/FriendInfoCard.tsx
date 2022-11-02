import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FsLightbox from 'fslightbox-react'; 

import { FriendEntry } from "../types/friend_types";
import { FriendAvatar } from "./FriendAvatar";
import { FriendName } from "./FriendName";
import { FriendInfoData } from "./FriendInfoData";

export const FriendInfoCard = (friend: FriendEntry) : JSX.Element => {
    const [toggler, setToggler] = useState(false);
    return(
        <div className="FriendInfoCard">
            <FriendAvatar img={friend.img} available={friend.available} />
            <FriendName first_name={friend.first_name} last_name={friend.last_name} statuses={friend.statuses}/>
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Info</Tab>
                    <Tab>Photos</Tab>
                </TabList>
                <TabPanel>
                    <FriendInfoData {...friend}/>
                </TabPanel>
                <TabPanel>                    
                { friend.photos && (
                    <div>
                        { friend.photos?.map( (pic : string, index: number) => (
                            <img key={`${friend._id}-${index}`} className="photoAlbum" src={pic} alt="user photo" onClick={() => setToggler(!toggler)}/>
                        ))}
                        <FsLightbox
                        toggler={toggler}
                        sources={friend.photos}
                        /> 
                    </div>
                )}                                        
                </TabPanel>
            </Tabs>
        </div>
    );
}