document.addEventListener('DOMContentLoaded',()=>{
  //cardoptions
  const cardArray=[
    {
      name:'cupcake',
      img:'images/cupcake.png'
    },
    {
      name:'cupcake',
      img:'images/cupcake.png'
    },
    {
      name:'gift',
      img:'images/gift.png'
    },
    {
      name:'gift',
      img:'images/gift.png'
    },
    {
      name:'heart',
      img:'images/heart.png'
    },
    {
      name:'heart',
      img:'images/heart.png'
    },
    {
      name:'hippo',
      img:'images/hippo.png'
    },
    {
      name:'hippo',
      img:'images/hippo.png'
    },
    {
      name:'seven',
      img:'images/seven.png'
    },
    {
      name:'seven',
      img:'images/seven.png'
    },
    {
      name:'tissue',
      img:'images/tissue.png'
    },
    {
      name:'tissue',
      img:'images/tissue.png'
    },


  ]
  cardArray.sort(()=> 0.5 - Math.random())

  const grid= document.querySelector('.grid')
  const resultDisplay=document.querySelector( '#result' )
  var cardChosen=[]
  var cardsChosenId=[]
  var cardsWON=[]

  //creating the board

  function createBoard(){
    for(let i=0;i<cardArray.length;i++){
      var card=document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',i)
      //card.addEventListener('click',flipcard)
      grid.appendChild(card)


    }
  }

  //check your match 
  function checkForMatch(){
    var cards=document.quertSelectorAll('img')
    const optionOneId= cardsChosenId[0]
    const optionTwoId= cardsChosenId[1]

    if(cardChosen[0]==cardChosen[1]){
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    }else{
      cards[optionOneId].setAttribute('src', images/blank.png)
      cards[optionTwoId].setAttribute('src', images/blank.png)
      alert('Sorry deer, try again.')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent= cardsWon.length
    if(cardsWon.length==cardArray.length/2){
      resultDisplay.textContent= 'Congratulations deer. Game finish karliya aapne'

    }

  }


  //flip the card
  function flipcard(){
    cardId= this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length==2){
      setTimeout(checkForMatch,500)
    }

  }







})
