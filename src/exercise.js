
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
  var octets = dna.match(/.{8}/g);
  return _.uniq(octets).length;
}

// # 4) How many unique, overlapping, complete "octets"?

overlappingOctets = function(dna){
  var octetList = [];

  for ( i = 0; i < dna.length - 7 ; i++ ){ 
    var octet = dna.substring(i, i + 8);
      octetList.push(octet);
    }

  return _.unique(octetList).length;
}

// # 5) What is the reverse complement? (G <=> C; A <=> T)

reverseComplement = function(dna){
  var reverse = dna.split('').reverse();
  var complements = [];

  for ( var i = 0; i < reverse.length; i++ ){
    switch (reverse[i]){
      case reverse[i] = 'G' : complements.push('C');
        break;
      case reverse[i] = 'C' : complements.push('G');
        break;
      case reverse[i] = 'A' : complements.push('T');
        break;
      case reverse[i] = 'T' : complements.push('A');
        break;
    }
  }

  return complements.join('');
};


// # 6) How many unique octets exist for the DNA bases?

uniqueBaseOctets = function(){
  buildOctets(8, "");
  return octets.length;
}

var octets = [];

buildOctets = function(length, prefix) {

  if (length > 1) {
    buildOctets( length - 1, prefix + 'G' );
    buildOctets( length - 1, prefix + 'C' );
    buildOctets( length - 1, prefix + 'A' );
    buildOctets( length - 1, prefix + 'T' );
  } else {
    octets.push( prefix + 'G' );
    octets.push( prefix + 'C' );
    octets.push( prefix + 'A' );
    octets.push( prefix + 'T' );
  }

};





