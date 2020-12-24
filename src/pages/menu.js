const menu = () => {
  console.log(`menu`);
  // Display menu options
  let menu1 = $("<p></p>").text("Menu");   // Create with jQuery
  $("#container").html(menu1);
}

export { menu }
