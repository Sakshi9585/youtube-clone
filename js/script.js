// window.onload = function () {
//   const sidebar = document.querySelector(".sidebar");
//   const closeBtn = document.querySelector("#btn");
//   const searchBtn = document.querySelector(".bx-search");

//   closeBtn.addEventListener("click", function () {
//       toggleSidebar();
//   });

//   searchBtn.addEventListener("click", function () {
//       toggleSidebar();
//   });

//   // Function to toggle the sidebar
//   function toggleSidebar() {
//       sidebar.classList.toggle("open");
//       menuBtnChange();
//   }

 

//   // Add a click event listener to the document
//   document.addEventListener("click", function (event) {
//       // Check if the clicked element is not within the sidebar
//       if (!sidebar.contains(event.target) && event.target !== closeBtn && event.target !== searchBtn) {
//           // Close the sidebar if it's open
//           if (sidebar.classList.contains("open")) {
//               toggleSidebar();
//           }
//       }
//   });
// };

window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", function () {
    toggleSidebar();
  });

  searchBtn.addEventListener("click", function () {
    toggleSidebar();
  });

  // Function to toggle the sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("open");
 

    // Add event listener for transitionend
    sidebar.addEventListener("transitionend", handleTransitionEnd);
  }

  // Function to handle transition end
  function handleTransitionEnd() {
    const thirdBox = document.querySelector('.third-box');

    // Delay execution to ensure the class has been updated
    setTimeout(function () {
      // Check if the sidebar is closed (i.e., the open class is removed)
      if (!sidebar.classList.contains("open")) {
        // Set opacity of third-box to 0.5
        thirdBox.style.opacity = 0.7;
      } else {
        // If the sidebar is open, set opacity of third-box back to 1
        thirdBox.style.opacity = 1;
      }
    }, 0);

    // Remove the event listener to avoid multiple calls
    sidebar.removeEventListener("transitionend", handleTransitionEnd);
  }

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is not within the sidebar
    if (!sidebar.contains(event.target) && event.target !== closeBtn && event.target !== searchBtn) {
      // Close the sidebar if it's open
      if (sidebar.classList.contains("open")) {
        toggleSidebar();
      }
    }
  });
};



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }