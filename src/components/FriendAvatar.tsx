export const FriendAvatar = ({img, available} : {img : string, available: boolean | undefined}) : JSX.Element => {
    return(
        <div className="FriendAvatar">
            <div className={`AvatarStatus ${ available && available === true ? 'StatusTrue' : 'StatusFalse'}`}></div>
            <img className="AvatarImg" src={ img === '' ? '/no_user_img.png' : img }/>
        </div>
    );
}