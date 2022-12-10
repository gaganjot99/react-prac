function scrollTrigger(selector) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el);
  });
}
let observer = new IntersectionObserver(
  (entries, observer) => {
    // This takes a callback function that receives two arguments: the elements list and the observer instance.
    //console.log("outside");
    entries.forEach((entry) => {
      //console.log("topof");
      // `entry.isIntersecting` will be true if the element is visible
      if (entry.isIntersecting) {
        //console.log("inside");
        entry.target.classList.add("active-animation");
        entry.target.classList.remove("hidden");
        // We are removing the observer from the element after adding the active class
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "-100px",
  }
);
export function addObserver(el) {
  // We are creating a new IntersectionObserver instance
  // Adding the observer to the element
  observer.observe(el);
}

export default scrollTrigger;
