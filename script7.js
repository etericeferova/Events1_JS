const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.href.startsWith("http://")) {
    link.classList.add("dotted-underline");
  }
});
