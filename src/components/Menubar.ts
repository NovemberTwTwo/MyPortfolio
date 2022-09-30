import { createElement, createFragment } from '../core/CreateElement';
import MenuButton from './MenuButton';

function Menubar(...children: Array<HTMLElement>) {
  const $target = createElement('div', { class: 'menubar-container' });

  const render = () => {
    const template = createFragment(
      createElement(
        'div',
        {
          class: 'grid-container',
        },
        ...children,
      ),
    );
    $target.replaceChildren(template);
  };

  render();

  return $target;
}

export default Menubar;
