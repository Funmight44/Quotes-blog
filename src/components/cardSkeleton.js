import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
    return ( 
        <div className="card">
            <p className="title">{<Skeleton/>}</p>
            <p><Skeleton count={5}/></p>
            <p className="control">
                <span className="poster"><Skeleton width='70px'/></span>
            </p>
        </div>
     );
}
 
export default CardSkeleton;