import "../scss/Footer.scss"
export default function CvFooter(){
  return(
    <footer>
      <section className="CvFooter">

      <p>Denne side er lavet efter mit CV</p>

      
      <a className="Download" href="./Downloads/CV.pdf" alt="Download CV" download={"CV"}>Download CV</a>
      </section>
    </footer>
  )
}


