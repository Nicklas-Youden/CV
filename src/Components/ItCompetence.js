import axios from "axios";
import { useEffect, useState } from "react";
import ItCard from "./containers/ItCards";
import "../scss/ItComSection.scss";



export default function ItCompetence(){

  var [content, setContent] = useState([])
  useEffect(
    function() {
      axios
      .get("/Cardinfo.json")
      .then((response) => {
        setContent(response.data.ItCom);
        
      });
    },
    [setContent]
    );
    //console.log(content)
  return(
    <section className="ItComs">
      <header>
        <h2 className="Header">IT-Kompetencer</h2>
      </header>
      <section className="ItComCards">

        <ul>
          

          {content.map((item, i) => <ItCard  key={i} content={item}/>)}
          
          
        </ul>
      </section>
    </section>
  )
}