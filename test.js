class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(newStrand) {
    let hammingDistance = 0;
    let shorterArr;
    let longerArr;
    let arrOne = this.strand.split('');
    let arrTwo = newStrand.split('');
    
    if (arrOne.length < arrTwo.length) {
      shorterArr = arrOne.slice();
      longerArr = arrTwo.slice();
    } else {
      shorterArr = arrTwo.slice();
      longerArr = arrOne.slice();
    }

    shorterArr.forEach((nucleotide, idx) => {
      if (nucleotide !== longerArr[idx]) {
        hammingDistance += 1;
      }
    });

  return hammingDistance;
  }
}



// function compare(strandOne, strandTwo) {
//   let hammingDistance = 0;
//   let shorterArr;
//   let longerArr;
//   let arrOne = strandOne.split('');
//   let arrTwo = strandTwo.split('');
//   if (arrOne.length < arrTwo) {
//     shorterArr = arrOne.slice();
//     longerArr = arrTwo.slice();
//   } else {
//     shorterArr = arrTwo.slice();
//     longerArr = arrOne.slice();
//   }

//   shorterArr.forEach((nucleotide, idx) => {
//     if (nucleotide !== longerArr[idx]) {
//       hammingDistance += 1;
//     }
//   });
//   return hammingDistance;
// }

let dna = new DNA("GAGCCTACTAACGGGAT");

let blah = dna.hammingDistance("CATCGTAATGACGGCCT");
console.log(blah);
  