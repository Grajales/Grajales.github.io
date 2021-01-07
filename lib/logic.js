/*$("button").on("click", function() {
    alert("Like Clicked!");
  });
  $("p").on("click", function() {
    alert("Paragraph Clicked!");
  });
  $("h1").on("click", function() {
    alert("Header Clicked!");
  });*/
  const button = document.querySelector('button');
  button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
  });
