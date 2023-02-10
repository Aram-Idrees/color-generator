const btn = document.querySelector('.btn')
const btnText= document.querySelector('.btn-toggle')
const Color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const theHex= document.querySelector('.theHex')



btn.addEventListener('click', ()=>{
    let hexColor='#'
    for(let i =0; i < 6; i++){
        const rnd= Math.floor(Math.random() * Color.length)
        hexColor += Color[rnd]
    }
    theHex.textContent=hexColor
    document.body.style.backgroundColor=hexColor
    btn.style.backgroundColor=hexColor
})




// const btn = document.querySelector('.btn')
// const btnText= document.querySelector('.btn-toggle')
// const Color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


// btn.addEventListener('click', ()=>{
//     if(btnText.innerHTML == 'Start'){
//         btnText.innerHTML ="Stop"
//         document.body.style.backgroundColor='#0'
//     }
//     else{
//         btnText.innerHTML ="Start"
//         infinite()
//     }
// })
// function infinite(){
//     for(let i=0; i<6; i++){
//         colorFlippingOn()
//     }
// }
// function colorFlippingOn(){
//     let hexColor='#'
//     for(let i =0; i < 6; i++){
//         const rnd= Math.floor(Math.random() * Color.length)
//         hexColor += Color[rnd]
//     }
//     document.body.style.backgroundColor=hexColor
// }

