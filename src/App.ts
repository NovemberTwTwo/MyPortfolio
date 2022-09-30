import Menubar from './components/Menubar';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

function App($target: Element) {
  const menubar_pos = createElement('div', { class: 'menubar-container ' });
  const welcome_pos = createElement('div', { class: 'welcome-container' });
  Menubar(menubar_pos);
  Welcome(welcome_pos);

  const render = () => {
    const template = createElement(
      'div',
      { id: 'TestApp' },
      menubar_pos,
      welcome_pos,
    );
    $target.replaceChildren(template);
  };

  render();
}

export default App;
