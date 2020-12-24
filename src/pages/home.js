const home = () => {
  console.log(`home`);
  // Display home options
  let home1 = $("<p></p>").text("home");   // Create with jQuery
  $("#container").html(home1);
}

export { home }
