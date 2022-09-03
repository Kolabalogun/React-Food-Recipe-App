import React from "react";
import Popular from "../Sections/Popular";
import Veggie from "../Sections/Veggie";
import '../Others/Style.css'


const Home = () => {


  const [Popularstate, setPopularState] = React.useState([]);

  const getApi = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87f13999ea9e4bf794af7d1d26a0fc9f&number=4`
    );
    const data = await res.json();

    setPopularState(data.recipes);
  };

  console.log(Popularstate);

  React.useEffect(() => {
    getApi();
  }, []);





  return (
    <div className="">
     
      <div className="items">

     <Popular Popularstate={Popularstate}/>
      </div>
      
      <div className="items">

      <Veggie Popularstate={Popularstate}/>
      </div>
    </div>


  )
};

export default Home;
