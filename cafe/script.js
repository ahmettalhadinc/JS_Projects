document.getElementById('addMenuButton').addEventListener('click', addMenu);

let menus = [];

function addMenu() {
    const title = document.getElementById('menuTitle').value;
    const imageUrl = document.getElementById('menuImage').value;

    
    const newMenu = { title, imageUrl };
    menus.push(newMenu);
    renderMenus();

   
}

function renderMenus() {
    const menuListe = document.getElementById('menuListe');
   
    
    menus.forEach(menu => {
        

        const menuTitle = document.createElement('h1');
        menuTitle.innerText = menu.title;

        const menuImage = document.createElement('img');
        menuImage.src = menu.imageUrl;
        menuImage.alt = menu.title;
        

        
        const divolus=document.createElement('div');
        divolus.classList.add("menulist")
        divolus.appendChild(menuTitle);
        divolus.appendChild(menuImage);

        menuListe.appendChild(divolus)
       
    });
}
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
