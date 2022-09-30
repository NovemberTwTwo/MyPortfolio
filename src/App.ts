import Experience from './components/Experience';
import Menubar from './components/Menubar';
import MenuButton from './components/MenuButton';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

function App($target: Element) {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
  const onMenuButtonClick = (page: number) => {
    window.scrollTo({ top: vh * page, behavior: 'smooth' });
  };

  const render = () => {
    const template = createElement(
      'div',
      { id: 'TestApp' },
      Menubar(
        MenuButton('Intro', onMenuButtonClick, 0),
        MenuButton('Experience', onMenuButtonClick, 1),
        MenuButton('Profile', onMenuButtonClick, 2),
      ),
      Welcome(),
      Experience(),
      Profile(),
    );
    $target.replaceChildren(template);
  };

  render();
}

export default App;
