
makeSentence = ((sentence) => sentence.match(/[\.\?\!]$/).length === 0 ? sentence[0].toUpperCase() + sentence.slice(1) + "." : sentence[0].toUpperCase() + sentence.slice(1))