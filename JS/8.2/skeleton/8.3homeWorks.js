// titleize < array 
// use .map
// Capitalize each word in the name 
names = ["devin", "alec", "randa", "shalonda", "kittie", "earnestine", "veta", "kaye", "anglea", "ollie", "sara", "dusty", "myriam", "roosevelt", "natacha", "chang", "deshawn", "scottie", "jackqueline", "lilla", "georgeann", "bernarda", "rolf", "rachel", "idalia", "kandace", "johnny", "roosevelt", "adan", "morton", "kurt", "renetta", "francis", "tommie", "ismael", "noble", "diedre", "miriam", "hosea", "tad", "fritz", "xochitl", "dinorah", "porter", "art", "tasha", "kiesha", "saundra", "cornell", "kai", "aldo", "dorthy", "kasey", "german", "trenton", "cruz", "merlin", "gregoria", "michaela", "elisha", "isidro", "georgeanna", "jon", "crystle", "rubin", "tamekia", "willy", "tequila", "douglass", "rueben", "edna", "porter", "derek", "edgar", "ed", "eusebia", "jayne", "kenda", "ollie", "christopher", "dallas", "wilber", "shanice", "kenneth", "elijah", "van", "jonathan", "pamala", "myrtice", "annis", "shery", "lindsey", "jimmy", "charles", "garry", "sylvie", "aretha", "julietta", "emelda", "kenton"]

const titleize = function (names) {
    titles = []
    const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
    names.map(name => titles.push("Mx. " + capitalize(name) + " Jingleheimer Schmidt"));
    return titles

}

console.log(titleize(names))


