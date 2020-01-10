function toggleNavbar() {
  const toggler = document.querySelector(".toggler");

  // check if toggler exists
  if (!toggler) return;

  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    // change icon if bars to x if x to bars
    // grab element child
    const thisChild = this.children[0];
    // display dropdown
    const dropdown = document.querySelector(".nav-items");
    if (!dropdown) return;

    function toggleIcon(icon1, icon2) {
      thisChild.classList.remove(icon1);
      thisChild.classList.add(icon2);
    }

    // add active class
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
    }

    if (thisChild.classList.contains("fa-bars")) {
      // change to fa-times
      toggleIcon("fa-bars", "fa-times");
    } else {
      toggleIcon("fa-times", "fa-bars");
    }
  });
}

function toggleTabs() {
  const tabs = document.querySelectorAll(".tab-link");

  if (!tabs) return;

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function(e) {
      e.preventDefault();

      // remove all active classes from others and add to yours
      tabs.forEach(
        value =>
          value.classList.contains("active") && value.classList.remove("active")
      );

      // add active class to clicked
      e.target.classList.add("active");
    });
  });
}
// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  // toggle navbar
  toggleNavbar();
  toggleTabs();
});
