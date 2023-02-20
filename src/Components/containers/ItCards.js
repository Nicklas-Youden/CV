import "../../scss/ItCom.scss"

export default function ItCard({ content}) {
	return (
		<li>
			<article className="ItCom">
			

				{content.map(function (item, i) {
					switch (item.type) {
						
						case "header":
							return <h3 key={i} className="ItCom__title">{item.text}</h3>
							case "Offset":
							return <img  key={i} className="ItCom__Offset" src={item.src} alt={item.alt}></img>
							case "skill":
								return <p key={i} className="ItCom__skill">{item.text}</p>
								default:
									return null
								}
							})}
			
			</article>
		</li>
	)
}