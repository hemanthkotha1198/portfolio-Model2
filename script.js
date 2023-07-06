// let words=document.querySelectorAll(".word");
// words.forEach((word)=>{
//     let letters=word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         letspan=document.createElement("span");
//         span.textContent=letter;
//         span.className="ketter";
//         words.appened(sapn);
//     });
// });
// let currentwordIndex=0;
// let maxwordIndex=words.length -1;
// words[currentwordIndex].getElementsByClassName.opacity="1";

// let changeText =() =>{
//     let currentword =words[currentwordIndex];
//     let nextword=currentwordIndex=== maxwordIndex?words[0]:words[currentwordIndex+1];
//     Array.from(currentword.children).forEach((letter,i)=>{
//         setTimeout(()=>{
//             letter.className=" letter out";
//         },i*80);
//     });
//     nextword.getElementsByClassName.opacity=1;
//     Array.from(nextword.children).forEach((letter,i)=>{
//         letter.className= "letter behind";
//         setTimeout(()=>{
//             letter.className="letter in";
//         },340+i*80);
//     });
//     currentwordIndex=currentwordIndex===maxwordIndex?0:currentwordIndex+1;
// };
// changeText();
// setInterval(changeText,4000)


const typed = new Typed('.multiple-text',{

    strings :['frontEnd Developer','Web desiger'],
    typeSpeed:100,
    backSpeed:100,
    backDealy:100,
    loop :true

});


// circle skill///////////////////////////////////////////////////////////////////////////////
const circles= document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var parcent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;
    for(let i=0;i<dots;i++)
    {
        points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML=points;
    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0;i<parcent;i++)
    {
        pointsMarked[i].classList.add('marked')
    }
})

// ------------------------------------mix it in the portfolio Selection.--------------------------------------------------
var mixer = mixitup('.portfolio-gallery');












