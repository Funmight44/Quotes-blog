import { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import UseTitle from "../hook/useTitle";

import Loader from "../components/loader";


const Home = () => {
    // const qoutes = [
    //     {id: 1, title: "Success", description: 'Success usually comes to those who are too busy to be looking for it.' , author: 'Henry David Thoreau'},
    //     { id: 2, title: "Taking Action", description: 'The journey of a thousand miles begins with one step', author: 'Lao Tzu'},
    //     { id: 3,  title: "Endurance", description: "Hardships often prepare ordinary people for an extraordinary destiny.", author: 'C.S. Lewis'},
    //     {id: 4,  title: "Believe in yourselve", description: "Believe you can, and you’re halfway there..", author: 'Theodore Roosevelt'},
    // ];

    let [qoutes, setqoutes] = useState(new Array(1).fill(false));
    let [toogle, setToogle] = useState(false);

    let qoutesRef =  useRef( collection(db, "qoutes"));
    UseTitle('Home')


    useEffect(() => {
        async function getQoutes() {
            const data = await getDocs(qoutesRef.current);   
            setqoutes(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )));
        }
        getQoutes()
        console.log('---')
    }, [toogle, qoutesRef])

    //Parsing object and function as dependency makes the useEffect to get to infinite loop, to prevent this, wrap it with useRef()

    return ( 
        <section>
            {qoutes.map((post, index) => (
                post ? (<Card key={post.id}  post={post} toogle={toogle} setToogle={setToogle}/>) 
                : (<Loader  key={index}/>)
            ))}
        </section>
     );
}
 
export default Home;