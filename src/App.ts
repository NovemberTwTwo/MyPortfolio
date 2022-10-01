import Experience from './components/Experience';
import Menubar from './components/Menubar';
import MenuButton from './components/MenuButton';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

function App($target: Element) {
  const onMenuButtonClick = ($page: Element) => {
    $page.scrollIntoView({ behavior: 'smooth' });
  };
  const [welcome, experience, profile] = [Welcome(), Experience(), Profile()];

  const render = () => {
    const template = createElement(
      'div',
      { id: 'TestApp' },
      Menubar(
        MenuButton('Intro', onMenuButtonClick, welcome),
        MenuButton('Experience', onMenuButtonClick, experience),
        MenuButton('Profile', onMenuButtonClick, profile),
      ),
      welcome,
      experience,
      profile,
    );
    $target.replaceChildren(template);
  };

  render();
}

export default App;
