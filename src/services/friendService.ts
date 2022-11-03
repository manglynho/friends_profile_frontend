import axios from "axios";
//import { apiBaseUrl } from "../constant";
import { FriendEntry } from "../types/friend_types";

export const getFriendsList = async () => {
    const req = axios.get<Array<FriendEntry>>('/api/v1/friends')
    const res = await req;
    return res.data;
}