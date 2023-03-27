  const faceFight = [
    {name: 'black maria', file: 'blackmaria.jpg'}, 
    {name: 'boa', file: 'boa.jpg'}, 
    {name: 'hiyori', file: 'hiyori.jpg'}, 
    {name:'makino', file: 'makino.jpg'}, 
    {name:'nami', file: 'nami.jpg'}, 
    {name:'okiku', file: 'okiku.jpg'}, 
    {name:'perona', file: 'perona.jpg'}, 
    {name:'rebeka', file: 'rebeka.jpg'}, 
    {name:'reiju', file: 'reiju.jpg'}, 
    {name:'robin', file: 'robin.jpg'},
    {name:'tashigi', file: 'tashigi.jpg'}, 
    {name:'ulti', file: 'ulti.jpg'}, 
    {name:'uta', file: 'uta.jpg'}, 
    {name:'yamato', file: 'yamato.jpg'},
]

  let randomFace = document.querySelector('button')

randomFace.addEventListener('click', function(){
    for (let i = 0; i < faceFight.length; i++) {
        let randomPickOne = Math.floor(Math.random() * faceFight.length)
        let randomPickTwo = Math.floor(Math.random() * faceFight.length)

        leftFace = faceFight[randomPickOne]
        rightFace = faceFight[randomPickTwo]

        let leftFinalPickOne = leftFace.file
        let leftFinalPickTwo = leftFace.name
        
        let rightFinalPickOne = rightFace.file
        let rightFinalPickTwo = rightFace.name
        document.getElementById('left-file').src = `./images/${leftFinalPickOne}`
        document.getElementById('left-name').textContent = leftFinalPickTwo.toUpperCase()

        document.getElementById('right-file').src = `./images/${rightFinalPickOne}`
        document.getElementById('right-name').textContent = rightFinalPickTwo.toUpperCase()
    }
})

