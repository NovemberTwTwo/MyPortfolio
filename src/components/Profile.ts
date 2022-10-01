import { createElement, createFragment } from '../core/CreateElement';

function Profile() {
  const $target = createElement('div', {
    class: 'profile-container toObserve',
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

export default Profile;
