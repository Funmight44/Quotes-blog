import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from "../firebase/config";
import {useNavigate} from 'react-router-dom'
import UseTitle from '../hook/useTitle';

const postRef = collection(db, "qoutes");


const Create = () => {
    const navigate = useNavigate();
    UseTitle('Create Post');
   
    async function createPost(event) {
        event.preventDefault();
        const document = {
            title: event.target.title.value,
            description: event.target.description.value,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        };
        await addDoc(postRef, document);
        navigate('/')
    };



    return ( 
        <section>
            <div className="createTitle">
                <h2>Add new post</h2>
            </div>
            <form onSubmit={createPost} className="create">
                <input type="text" placeholder="Title" name="title"  maxLength="60"  required/>
                <textarea type="text" placeholder="Create post" name="description" />
                <button type="submit">Create</button>
            </form>
        </section>
     );
}
 
export default Create;