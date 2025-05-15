import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Loader from "../../components/Loader/Loader";



export default function Homework08() {

  const [fox, setFox] = useState<string>("#");
  const [loading, setLoading] = useState(true);

  
  const handleIncrease= () => {
    setLoading(true)
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(data =>{ 
      setFox(data.image);
      setLoading(false);
    });
  };

useEffect(() => {
    handleIncrease()
  }, []);


  return (
    <div>
      <h2>Homework 08: Randomfox</h2>
     
      <div>
        <MyButton func={handleIncrease} type="button" text="new fox"/>
      </div>
      <p></p>

      {loading ? <Loader/> : <img width={200} src={fox} alt="" />}

    </div>
  );
}