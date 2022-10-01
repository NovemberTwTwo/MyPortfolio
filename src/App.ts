import Experience from './components/Experience';
import Menubar from './components/Menubar';
import MenuButton from './components/MenuButton';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

const delay = (timeToDelay: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

function App($target: Element) {
  const onMenuButtonClick = ($page: Element) => {
    $page.scrollIntoView({ behavior: 'smooth' });
  };
  const [welcome, experience, profile] = [Welcome(), Experience(), Profile()];

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );

  const onScroll = async (e) => {
    if (e.deltaY > 0)
      window.scrollBy({
        top: vh,
        behavior: 'smooth',
      });
    else
      window.scrollBy({
        top: -vh,
        behavior: 'smooth',
      });
    document.removeEventListener('wheel', onScroll);
    await delay(500);
    document.addEventListener('wheel', onScroll, { passive: false });
  };

  document.addEventListener('wheel', onScroll, {
    passive: false,
  });

  document.addEventListener('wheel', (e) => e.preventDefault(), {
    passive: false,
  });

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
