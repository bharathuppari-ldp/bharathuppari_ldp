function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}


function searchAPI(query) {
  console.log("Searching for:", query);
  document.getElementById("output").innerText = `Results for "${query}"`;
}

const debouncedSearch = debounce(searchAPI, 500);

document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});


// function throttle(fn, delay) {
//   let last = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - last >= delay) {
//       last = now;
//       fn.apply(this, args);
//     }
//   };
// }

// function searchAPI(query) {
//   console.log("Searching:", query);
// }

// const throttledSearch = throttle(searchAPI, 1000);

// document.getElementById("search").addEventListener("input", (e) => {
//   throttledSearch(e.target.value);
// });
