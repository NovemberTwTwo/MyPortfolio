import Experience from './components/Experience';
import Menubar from './components/Menubar';
import MenuButton from './components/MenuButton';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import { createElement, createFragment } from './core/CreateElement';
import fixedPage from './utils/fixedPage';

const [welcome, experience, profile] = [Welcome(), Experience(), Profile()];
const main = createElement(
  'div',
  { class: 'main-container' },
  welcome,
  experience,
  profile,
);

function App() {
  const $target = createElement('div', {});

  const onMenuButtonClick = ($page: Element) => {
    $page.scrollIntoView({ behavior: 'smooth' });
  };

  fixedPage(main);

  const render = () => {
    const template = createFragment(
      Menubar(
        MenuButton('Intro', () => onMenuButtonClick(welcome)),
        MenuButton('Experience', () => onMenuButtonClick(experience)),
        MenuButton('Profile', () => onMenuButtonClick(profile)),
      ),
      main,
    );
    $target.replaceChildren(template);
  };

  render();

  return $target;
}

export default App;
