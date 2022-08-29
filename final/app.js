const menu = [
  {
    id: 1,
    title: "lace-Up sneakers",
    category: "shoes",
    price: "5,200" ,
    img: "./images/shoe1.webp",
    desc: `Adorn your feet with this goodness of comfort, giving your feet a safe haven and total relaxation.`,
    status: 'BUY ',

  },
  {
    id: 2,
    title: "Loose Short Sleeve",
    category: "male-ware",
    price: '6,000',
    img: "./images/male1.jpg",
    desc: `Mens Vintage Ethnic Style Printing Loose Short Sleeve Stand Collar Casual Shirt plus it's made of high quality wears`,
    status: 'BUY ',

  },
  {
    id: 3,
    title: "Night Gown",
    category: "female-ware",
    price: '3,500',
    img: "./images/female3.webp",
    desc: `This sleeveless nightwear is simple, unique and beautiful.
    It is easy to wash and it is comfortable.`,
    status: 'BUY ',

  },
  {
    id: 4,
    title: "Heel Ankle Strap",
    category: "shoes",
    price: "29,999",
    img: "./images/shoe2.jpg",
    desc: `Italia Black Natasha Suede Leather Block Heel Ankle Strap Shoe ( Made In Italy )
    `,
    status: 'BUY ',

  },
  {
    id: 5,
    title: "Turtle Neck Top",
    category: "male-ware",
    price: "6,000",
    img: "./images/male2.webp",
    desc: `Men and Women Turtleneck long sleeve T-Shirts.
    It is also a thermal underwear. It is comfortable to wear `,
    status: 'BUY ',

  },
  {
    id: 6,
    title: "Tummy Wrap - Black",
    category: "female-ware",
    price: '4,000',
    img: "./images/female2.webp",
    desc: `This elastic tummy wrap allows full coverage of the tummy.
    You can focus the wrapping to any part of the tummy `,
    status: 'BUY ',

  },
  {
    id: 7,
    title: "High Heel Slingback",
    category: "shoes",
    price: "89,999",
    img: "./images/shoe3.jpg",
    desc: `Gold Nathalie Studded Tuscany Leather High Heel Slingback. Available after placing your order`,
    status: 'BUY ',

  },
  {
    id: 8,
    title: "Monochrome Shirt",
    category: "male-ware",
    price: "4,850",
    img: "./images/male3.webp",
    desc: `Knight Fortress Men's quality Checked shirt for everyday official purposes. Its classy and gives you that perfect look.  `,
    status: 'BUY ',

  },
  {
    id: 9,
    title: "Sleeve Belted Dress",
    category: "female-ware",
    price: "6,000",
    img: "./images/female1.webp",
    desc: `Dress to impress, the classic look is sharp enough to get everyone admiring your great sense of style and poise.`,
    status: 'BUY ',

  },
  {
    id: 10,
    title: "Wrist Storage Box",
    category: "accessories",
    price: '19,500',
    img: "./images/last.webp",
    desc: `Our refreshing design carefully incorporates deep ridges, straight lines, and a real glass top display.`,
    status: 'BUY ',

  },
];



// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo"  />
          
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">&#8358 ${item.price}</h4>
              
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
            <button class ="status">${item.status}</button>
          </div>
          
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  

  

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
  const buy = sectionCenter.querySelectorAll(".status");
  console.log(buy);

  buy.forEach(function (status) {
    status.addEventListener("click", function () {
      window.location.href = 'buy.html'
      
    });
  });
}



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}
// window.addEventListener("DOMContentLoaded", function () {
//   const displa = myClock.style.display = 'none';
//   displa();
  
// });


function toggleList() {
  // get the clock
  var myClock = document.getElementById('myUL');

  // get the current value of the clock's display property
  var displaySetting = myClock.style.display;

  // also get the clock button, so we can change what it says
  var listButton = document.getElementById('listButton');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting === 'block') {
    // clock is visible. hide it
    myClock.style.display = 'none';
    // change button text
    listButton.innerHTML = 'Search';
  }
  else {
    // clock is hidden. show it
    myClock.style.display = 'block';
    // change button text
    listButton.innerHTML = 'Hide list';
  }
}
