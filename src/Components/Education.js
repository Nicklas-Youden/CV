import "../scss/LeftSide.scss"
import "../scss/PlacementFixes.scss"
export default function Education(){
	return(
		<section className="Education">
			<header>
			<h2 className="Header">Uddannelse</h2>
			</header>
			<section className="EducationMain">

			<ul>
				{/* This is likely not the best way to do it. but an "span" dont have any value in googles serch engine so the SEO is happy*/}
				{/* The "Year" span is only used to make the year itself italic */}
				<li><p><span className="Year">2022-</span> Technical education CPH <span className="EducationMain__step">Datatekniker Programmering p1</span></p></li>
				<li><p><span className="Year">2022 </span>Technical education <span className="EducationMain__step">CPH Datatekniker Grundforløb</span></p></li>
				<li><p><span className="Year">2019-21</span> Roskilde Tekniske Skole <span className="EducationMain__step">Webudvikler</span></p></li>
				<li><p><span className="Year">2019</span> Holbæk 10.klassecenter <span className="EducationMain__step">10.klasse</span></p></li>
			</ul>
			</section>
		</section>
	);
}