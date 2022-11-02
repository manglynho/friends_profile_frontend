export const FriendName = ({ first_name, last_name, statuses } : {first_name : string, last_name: string, statuses: Array<string> | undefined}) : JSX.Element => {
    
    const setRandomStatus = ( statuses: Array<string> | undefined ) => {        
        if(!statuses){
            return 'No status';
        }
        return statuses[Math.floor(Math.random() * statuses.length)];
    }
    
    return(
        <div className="FriendName">
            <h1 className="StatusTitle"> {first_name} {last_name}</h1>
            <span className="StatusBadge"> { setRandomStatus(statuses) } </span>
        </div>
    );
}