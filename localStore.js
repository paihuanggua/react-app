export const get=()=>JSON.parse(localStorage.getItem('state')) || undefined;
export const set=(state,props)=>{
	let toSave={};
	props.forEach(prop=>toSave[prop]=state[prop]);
	localStorage.setItem('state',JSON.stringify(toSave));
}