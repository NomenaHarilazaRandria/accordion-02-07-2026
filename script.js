function createAccordion(myObjectInArray){
	let activId = null; //geston de l'état de chaque panel
	const panels = []; //besoin des listes de panels pour gérer l'état d'un panel en fonction de l'état des autres (si un ouvert, les autres fermés)
	const divContainer = document.createElement('div');
	divContainer.classList.add('accordionContainer');
	myObjectInArray.forEach(el => {
		const div = document.createElement('div');
		div.classList.add('panel');
		const btn = document.createElement('button');
		btn.classList.add('inactive'); // m'a permis de modifier l'icone + ou - sur le bouton dans css
		const p = document.createElement('p');
		p.textContent = el.detailText;	
		p.classList.add('hidden');
		panels.push({
			id: el.id,
			p: p,
			btn : btn
		});
		btn.textContent = el.titleText;
		btn.addEventListener('click', ()=> {;
			if(activId === el.id){
				activId = null;
			}else{
				activId = el.id;
			}
			//la fonction qui me permet de gérer l'état des panels selons activId
			panels.forEach(panel => {
				if(panel.id === activId){
					panel.p.classList.remove('hidden');
					panel.btn.classList.add('active');
				} else {
					panel.p.classList.add('hidden');
					panel.btn.classList.remove('active');
				}
			});
		});
		div.appendChild(btn);
		div.appendChild(p);
		divContainer.appendChild(div);
	});
	const result = document.body.appendChild(divContainer);
	return result;
}

createAccordion([
{
	id: 1,
	titleText: "First Panel",
	detailText: "The first panel is open."
},
{
	id: 2,
	titleText: "Second Panel",
	detailText: "The second panel is open."
},
{
	id: 3,
	titleText: "Third Panel",
	detailText: "The third panel is open."
}
]);