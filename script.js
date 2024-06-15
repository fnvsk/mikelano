let intro=document.querySelector(".intro");
let logo=document.querySelector(".logo-header",);
let loader=document.querySelector(".loader")
let LogoSpan=document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{

        LogoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active");
                
            }, (idx+1)*400)
        });

        setTimeout(()=>{
            LogoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove("active")
                    span.classList.add("fade");
                    
                }, (idx+1)*50)
            })
        },2000)
        
        setTimeout(()=>{
            intro.style.top="-100vh"
        },2300)
    })
}
)

const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
}

function showContent(contentId) {
    // Verberg alle inhoudselementen
    var allContent = document.querySelectorAll('.content');
    allContent.forEach(function(content) {
      content.classList.remove('active');
    });
  
    // Toon het geselecteerde inhoudselement
    var selectedContent = document.getElementById(contentId + 'Content');
    selectedContent.classList.add('active');
  
    // Sluit het menu op mobiele apparaten na het selecteren van een item
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '200px';
   
  }
  
  function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var menuToggle = document.querySelector('.menu-toggle');
    if (sidebar.style.width === '200px') {
      sidebar.style.width = '0';
      menuToggle.classList.remove('open');
      document.querySelector('.main').style.marginLeft = '0'; // Pas de marge van de hoofdinhoud aan
    } else {
      sidebar.style.width = '200px';
      menuToggle.classList.add('open');
      document.querySelector('.main').style.marginLeft = '200px'; // Pas de marge van de hoofdinhoud aan
    }
  }
  
  
  //  Show popup form
  function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
  
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
        document.getElementById("popup").style.display = "block";
      }, 3000); // Show popup after 5 seconds (5000 milliseconds)
  
      document.querySelector(".close-btn").addEventListener("click", closePopup);
    });

    