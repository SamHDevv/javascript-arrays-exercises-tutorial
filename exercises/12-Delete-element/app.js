var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName) {
	return people.filter(name => name != personName);
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));