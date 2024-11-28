import { Link } from "react-router-dom";
import PNF from "../BG-img/visuals-JpTY4gUviJM-unsplash.jpg";
import UseTitle from "../hook/useTitle";

const PageNotFound = () => {
    UseTitle('Page Not Found')

    return ( 
        <main>
            <section>
                <div className="oops">
                    <p data-testid="pnfText">oops - page not found!!</p>
                    <img src={PNF} alt="pageNotFound"/>
                    <Link to="/"><button data-testid="homeBtn">Go back Home</button></Link>
                </div>
            </section>
        </main>
     );
}
 
export default PageNotFound;