import { createElement, createFragment } from '../core/CreateElement';

function Experience() {
  const $target = createElement('div', {
    class: 'experience-container',
  });
  const render = () => {
    const template = createFragment(
      createElement('div', { class: 'grid-container' }),
    );
    $target.replaceChildren(template);
  };
  render();

  return $target;
}

export default Experience;
