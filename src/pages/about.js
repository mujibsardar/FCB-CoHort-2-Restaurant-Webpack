const about = () => {
  console.log(`about`);
  // Display about options
  let about1 = $("<p></p>").text("about");   // Create with jQuery
  $("#container").html(about1);
}

export { about }
