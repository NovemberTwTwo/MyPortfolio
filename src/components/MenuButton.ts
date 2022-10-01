import { createElement, createFragment } from '../core/CreateElement';

function MenuButton(buttonText: string, clickEvent: Function, $page: Element) {
  const $target = createElement('div', { class: 'menubar-button-box' });

  const render = () => {
    const template = createElement(
      'button',
      {
        onClick: () => clickEvent($page),
        class: 'menubar-button',
      },
      createElement('span', { class: 'menubar-button-text' }, `${buttonText}`),
    );
    $target.replaceChildren(template);
  };
  render();

  return $target;
}

export default MenuButton;
