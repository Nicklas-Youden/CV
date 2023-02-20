import "../scss/LeftSide.scss"
import "../scss/PlacementFixes.scss"
import Address from"../svg/Address.svg"
import Mail from "../svg/Mail.svg"
import Phone from "../svg/Phone.svg"


export default function Contact(){
	return ( 
		<section className="Contact">
			<header>
				<h2 className="Header">Kontakt</h2>
			</header>
			<section className="ContactInfo">
				<ul>
					<li><a href="tel:+455061642"><img src={Phone} className="SVG__Phone" alt="Phone logo"/> 50621642</a></li>
					<li>
						<a href="mailto:nicklasyoudendk@gmail.com"><img className="SVG__Mail" src={Mail} alt="Mail Logo"/>nicklasyoudendk@gmail.com</a>
					</li>
					<li className="Address">
						<a href="https://www.google.com/maps/place/Rendeb%C3%A6kvej+6,+4050+Skibby/@55.7861926,11.8771199,535m/data=!3m2!1e3!4b1!4m5!3m4!1s0x46526549dc0631af:0x9451eecbf2f8612d!8m2!3d55.7861926!4d11.8771199" alt="Link to address" target="_blank" rel="noreferrer">
						
						<img src={Address} alt="Address logo" className="SVG__Address" />
						<p>Rendebækvej 6 <span className="Post">4050 Skibby</span></p>
						</a>
					</li>
				</ul>
			</section>

		</section>
	);
}

