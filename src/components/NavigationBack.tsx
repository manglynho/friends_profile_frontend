import { useNavigate } from "react-router-dom";

export const NavigationBack = () : JSX.Element => {
    const navigate = useNavigate();
    return(
        <div className="NavigationBack">
            <button onClick={() => { navigate(-1)}} className="NavigationBackBtn"><span className="arrowLeft"></span></button>
        </div>
    );
}