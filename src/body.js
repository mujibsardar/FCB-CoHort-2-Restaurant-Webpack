const body = () => {
  console.log(`body`);
  // Display body options
  let body1 = $("<div id='container'></div>");   // Create with jQuery
  $("#content").append(body1);
}

export { body }
