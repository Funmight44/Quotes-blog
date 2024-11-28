import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import {doc, deleteDoc} from 'firebase/firestore'


const Card = ({post, toogle, setToogle}) => {
    const {id, title, description, author} = post;
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const navigate = useNavigate()

    async function handleDelete() {
        const deleteRef = doc(db, "qoutes", id)
        await deleteDoc(deleteRef)
        navigate('/')
        setToogle(!toogle);
    }


    return ( 
        <div className="card">
            <p className="title"> {title}</p>
            <p>{description}</p>
            <p className="control">
                <span className="poster">poster: {author.name}</span>
                {isAuth && (author.id === auth.currentUser.uid) && 
                <span onClick={handleDelete} className="delete"><i className="bi bi-trash"></i></span>}
            </p>
        </div>
     );
}
 
export default Card;