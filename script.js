let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

console.log(menuIcon);
console.log(navbar);




menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.backgroundColor='yellow';
});

// menuIcon.onclick = ()=>{

// }


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top <offset + height)
        {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                try{
                    document.querySelector('header nav a[href*='+id+']').classList.add('active');
                }
                catch(e){
                }
            })
        }
    })

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // hide navbar when scroll 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// more about me

document.getElementById('knowMore').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('moreAboutMe').classList.toggle('show');
    let i = document.getElementById('moreAboutMe').classList.contains('show')
    console.log('class list --> ',document.getElementById('moreAboutMe').classList.value)
    console.log('i ',i)
    if(i==true){
        document.getElementById('knowMore').innerText='Read Less';
    }
    else 
    {
        document.getElementById('knowMore').innerText='Read More';
    }
})




// project show

const projects = document.querySelectorAll('.project-link');
// console.log(projects)

// projects.forEach(items=>{
//     console.log(items);
//     items.onclick= (e)=>{
//         const pname = items.getAttribute('data-pname');
//         console.log(pname);
//         // e.preventDefault();
//         const sec = document.getElementById(`${pname}`);
//         console.log(sec);
//         sec.classList.add('project');
//         sec.classList.remove('hidden');
//         console.log(sec);
//     }
// })

//  scroll reveal
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:1500,
    delay:100
});

ScrollReveal().reveal('.home-content,.heading,.con1,.con2',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form,.con3,.con4,.contactEnd',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img,.portfolio-box,.contact form,.project-img,.con1,.con3,.journey1,.journey3,.contactEnd,.left',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content,.portfolio-box,.contact form,.project-details,.con2,.con4,.journey2,.journey4,.right',{origin:'right'});

// ScrollReveal({
//     reset:true,
//     distance:'180px',
//     duration:1500,
//     delay:100
// });

// ScrollReveal().reveal('.left',{origin:'left'});
// ScrollReveal().reveal('.right',{origin:'right'});


// ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
// ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
// ScrollReveal().reveal('.home-content h1,.about-img,.portfolio-box,.contact form',{origin:'left'});
// ScrollReveal().reveal('.home-content p,.about-content,.portfolio-box,.contact form',{origin:'right'});


// typed js

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer','Full-Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
