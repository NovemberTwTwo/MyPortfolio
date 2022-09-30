import { createElement, createFragment } from '../core/CreateElement';

function Grid($target: Element, $child: Element) {
  const render = () => {
    const template = createFragment(
      createElement('div', {
        class: 'grid-container',
      }),
    );
  };
}
