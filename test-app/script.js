console.log("hi?");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd610b92aamsh84366c392782f19p1aadfejsn8b9afe3fbb82',
		'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
	}
};

fetch('https://weed-strain1.p.rapidapi.com/?strainType=Hybrid', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

