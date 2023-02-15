

export default function ItCard({ content }) {
	return (
		<li>
			<article>

				{content.map(function (item) {
					switch (item.type) {
						case "header":
							return <h3 className="ItCom__title">{item.text}</h3>
						//case "Offset":
							//return <p className="ItCom__text">{item.text}</p>
						case "skill":
							return <p className="ItCom__skill">{item.text}</p>
						default:
							return null
					}
				})}
			</article>


		</li>
	)
}