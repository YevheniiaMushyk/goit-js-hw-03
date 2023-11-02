function slugify(title) {
	const titleLowrCase = title.toLowerCase();
	const titlearray = titleLowrCase.split(" ");
	return (result = titlearray.join("-"));
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
