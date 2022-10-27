import { createElement, createFragment } from '../core/CreateElement';

function MenuButton(buttonText: string, clickEvent: Function) {
  const $target = createElement('div', { class: 'menubar-button-box' });
  const render = () => {
    const template = createElement(
      'button',
      {
        onClick: () => clickEvent(),
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
