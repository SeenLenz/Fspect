const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
  if (window.location.href.startsWith("https://www.youtube.com/watch?v=")) {
    setTimeout(() => {
      document.querySelector("#top-row").innerHTML = "asd";
    }, 2000);
  }
});

const attributes = {
  attributes: false,
  childList: true,
  subtree: false,
};

const target = document.body;
mutationObserver.observe(target, attributes);
