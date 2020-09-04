const stickyLogo=document.querySelector(".unscrolled");
const logo=document.querySelector(".logo-up");

const options= {
   
};

const mainMenuObserver= new IntersectionObserver(
    (entries,mainMenuObserver)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                stickyLogo.style.display="none"
            }
            else{
                stickyLogo.style.display="block";
            }
        });
    },options);


    mainMenuObserver.observe(logo);


        //animating cards right//
    const leftContents=document.querySelectorAll(".our-content-2");
    
    const haha= {
       
    };
    const rightAnimationObserver= new IntersectionObserver(
        (entries,rightAnimationObserver)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show-animation-right');
                    console.log(entry.target);

                }
    
            });
        },haha);
    
        leftContents.forEach((leftContent)=>{
            rightAnimationObserver.observe(leftContent);
        });

   //animation cards left//     
const rightContents=document.querySelectorAll(".our-content");
const x = window.matchMedia("(max-width: 768px)")
const hahaha= {
   
};
const leftAnimationObserver= new IntersectionObserver(
    (entries,leftAnimationObserver)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                // entry.target.classList.add('show-animation-left');
                // console.log(entry.target);
                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        entry.target.classList.remove('show-animation-left');
                    } else {
                        entry.target.classList.add('show-animation-left');
                    }
                  }
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction);
            }

        });
    },haha);

    rightContents.forEach((rightContent)=>{
        leftAnimationObserver.observe(rightContent);
    });