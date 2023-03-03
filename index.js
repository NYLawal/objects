
// QUESTION 1
function InstagramPost(handle, content, imagelink, views, likes) {
    this.Handle = handle;
    this.Content = content;
    this.imageLink = imagelink;
    this.Views = views;
    this.Likes = likes;
}



// QUESTION 2
const mecInstagram = new InstagramPost("mec", `There's no free time, there's no spare time, there's no next time, there's only life time. Go!`,
"linktr.ee/mecambassador", 3500, 2735);

const templateInstagram = new InstagramPost("template.net", "Earth is our home and we live in a dirty home", "http://homeEarth", 300, 142);



// QUESTION 3(a)
function createPerson(name, age, location) {
    return{
        name     : name,
        age      : age,
        location : location
    }
}
const musa = createPerson('Musa Dawodu', 19 , 'Lekki, Lagos State');

// QUESTION 3(b)
function createJambScores(eng, govt, lit, crk){
    return{
        Eng  : eng,
        Govt : govt,
        Lit  : lit,
        CRK  : crk
    }
}
const musaJambScores = createJambScores(70, 85, 82, 94 );   
musa.JambScores = musaJambScores;



// QUESTION 4
 /* An object can be cloned in any of four ways viz:

 1. The spread operator, represented as three dots (...)
 Example: 
 let ibrahim = {...musa};

 2. The Object.assign() method
 Example:
 let ibrahim = Object.assign({}, musa);

 3. The JSON.parse() method
 Example: let ibrahim = JSON.parse(JSON.stringify(musa));

 4. The structuredClone() method
 Example: let ibrahim = structuredClone(musa); */



// QUESTION 5
const presidentialCandidates = {
    AAC    : 'Omoyele Sowore',
    ACCORD : 'Christopher Imumolen',
    APC    : 'Bola Ahmed Tinubu',
    LP     : 'Peter Obi',
    NNPP   : 'Rabiu Kwankwaso',
    PDP    : 'Atiku Abubakr'
}

 for (const candidate in presidentialCandidates) {
    console.log(`${presidentialCandidates[candidate]} is the presidential candidate of ${candidate}`);
} 

