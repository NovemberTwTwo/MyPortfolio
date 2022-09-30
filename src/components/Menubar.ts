import { createElement, createFragment } from '../core/CreateElement';
import MenuButton from './MenuButton';

function Menubar() {
  const $target = createElement('div', { class: 'menubar-container' });

  const button1 = MenuButton('test1');

  const render = () => {
    const template = createFragment(
      createElement('div', {
        class: 'grid-container',
      }),
      button1,
    );
    $target.replaceChildren(template);
  };

  render();

  return $target;
}

export default Menubar;
