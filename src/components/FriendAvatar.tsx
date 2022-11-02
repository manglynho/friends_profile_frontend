export const FriendAvatar = ({img, available} : {img : string, available: boolean | undefined}) : JSX.Element => {
    return(
        <div className="FriendAvatar">
            <div className={`AvatarStatus ${ available ? 'StatusTrue' : 'StatusFalse'}`}></div>
            <img className="AvatarImg" src={img}/>
        </div>
    );
}