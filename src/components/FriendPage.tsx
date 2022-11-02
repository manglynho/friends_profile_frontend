import { useLocation } from "react-router-dom";
import { FriendInfoCard } from "./FriendInfoCard";
import { NavigationBack } from "./NavigationBack";
export const FriendPage = () : JSX.Element => {
    const location = useLocation();
    const { friend } = location.state;
    return(
        <div className="FriendPage">
            <NavigationBack/>
            <FriendInfoCard {...friend}/>
        </div>
    );
}