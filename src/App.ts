import Experience from './components/Experience';
import Menubar from './components/Menubar';
import MenuButton from './components/MenuButton';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

const delay = (timeToDelay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, timeToDelay));

function App($target: Element) {
  const onMenuButtonClick = ($page: Element) => {
    $page.scrollIntoView({ behavior: 'smooth' });
  };
  const [welcome, experience, profile] = [Welcome(), Experience(), Profile()];

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );

  let lastScroll = 0;

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const onScroll = async () => {
    console.log('test');
    document.addEventListener('wheel', preventDefault, {
      passive: false,
    });
    window.onscroll = null;
    if (document.documentElement.scrollTop > lastScroll) {
      window.scrollTo({
        top: Math.ceil(window.scrollY / vh) * vh,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: Math.floor(window.scrollY / vh) * vh,
        behavior: 'smooth',
      });
    }
    await delay(1000);
    window.onscroll = onScroll;
    document.removeEventListener('wheel', preventDefault);
    lastScroll = document.documentElement.scrollTop;
  };

  window.onscroll = onScroll;

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
