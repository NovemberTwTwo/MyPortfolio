import { createElement, createFragment } from '../core/CreateElement';

function Menubar($target: Element) {
  const render = () => {
    const template = createFragment(
      createElement('div', {
        class: 'menubar-grid',
      }),
    );
    $target.replaceChildren(template);
  };

  render();
}

export default Menubar;
