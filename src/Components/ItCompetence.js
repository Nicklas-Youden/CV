import axios from "axios";
import { useEffect, useState } from "react";
import ItCard from "./containers/ItCards";



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
  return(
    <section>
      <header>
        <h2>IT-Kompetencer</h2>
      </header>
      <section>

        <ul>

          {content.map((item, i) => <ItCard key={i} content={item}/>)}
        </ul>
      </section>
    </section>
  )
}