const transcription = (dna) => {
	// code here
    let rna = ''
   for(let i=0;i<dna.length;i++){
        if(dna[i] === 'G') rna +='C'
        if(dna[i] === 'C') rna +='G'
        if(dna[i] === 'T') rna +='A'
        if(dna[i] === 'A') rna +='U'
   }
   return rna    
}

transcription('GCT')