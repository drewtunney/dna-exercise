
// # Questions:

// # 1) How many unique bases (letters)?
// 4

// # 2) How many "A" bases?
// 23

// # 3) How many unique, non-overlaping, complete "octets"? (octet = group of 8 bases)
// 11

// # 4) How many unique, overlapping, complete "octets"?
// 84

// # 5) What is the reverse complement? (G <=> C; A <=> T)
// "CGAGCTAGCTAGATCGATCGTACTATTAGCTACTAGATCGGCCCGGGAATCGCCTAGATCGTAGCTAGCTGAGCTAGCTCGCGATCGATGCTAGTC"

// # 6) How many unique octets exist for the DNA bases?
// 65,536


// ****************************** //
// ************ Code ************ //
// ****************************** //


var dna = "GCTCGATCGATCTAGCTAGCATGATAATCGATGATCTAGCCGGGCCCTTAGCGGATCTAGCATCGATCGACTCGATCGAGCGCTAGCTACGATCAG";

// # 1) How many unique bases (letters)? 

uniqueBases = function(dna){
  var dna = dna.split('');
  return _.uniq(dna).length
}

// # 2) How many "A" bases?

aBases = function(dna){
  var dna = dna.split('');
  return _.filter(dna, function(letter) {
    return (letter === 'A');
  }).length;
}

// # 3) How many unique, non-overlaping, complete "octets"? (octet = group of 8 bases)

nonOverlappingOctets = function(dna){
  // split dna into octets every 8 characters
  var octets = dna.match(/.{8}/g);
  return _.uniq(octets).length;
}

// # 4) How many unique, overlapping, complete "octets"?

overlappingOctets = function(dna){
  var octetList = [];

  for ( i = 0; i < dna.length - 7 ; i++ ){
    // push a substring of 8 characters into the octetList array
    // start from index[0] and increment to the next until the last complete octet  
    var octet = dna.substring(i, i + 8);
    console.log(octet);
      octetList.push(octet);
    }

  return _.unique(octetList).length;
}

// # 5) What is the reverse complement? (G <=> C; A <=> T)

reverseComplement = function(dna){
  var dna = dna.split('');

 return _.map(dna, function(letter){

    switch (letter) {
      case 'G': return 'C';
      case 'C': return 'G';
      case 'A': return 'T';
      case 'T': return 'A';
      console.log(letter); 
    }

  }).join('');

}

// **** Reverse Complement First Attempt **** //

// reverseComplement = function(dna){
//   use lowercase letters to hold the place of converted letters
//   var dna = dna.replace(/G/g, "c");
//   var dna = dna.replace(/A/g, "t");
//   var dna = dna.replace(/C/g, "G");
//   var dna = dna.replace(/T/g, "A");
//   var dna = dna.replace(/c/g, "C");
//   var dna = dna.replace(/t/g, "T");
// }


// # 6) How many unique octets exist for the DNA bases?
// 4 ^ 8

