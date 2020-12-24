import { home } from './pages/home';
import { about } from './pages/about';
import { menu } from './pages/menu';

const header = () => {
  // Create three buttons Home, About, Menu
  let button1 = $("<button></button>").text("Home");   // Create with jQuery
  button1.click(function() {
    home();
  });
  $("#content").append(button1);
  let button2 = $("<button></button>").text("About");   // Create with jQuery
  button2.click(function() {
    about();
  });
  $("#content").append(button2);
  let button3 = $("<button></button>").text("Menu");   // Create with jQuery
  button3.click(function() {
    menu();
  });
  $("#content").append(button3);
}

export { header }
