import { createElement, createFragment } from '../core/CreateElement';

function Welcome($target: Element) {
  const render = () => {
    const template = createFragment(
      createElement(
        'div',
        {
          class: 'welcome-grid',
        },
        createElement(
          'div',
          {
            class: 'welcome-text-container',
          },
          createElement('div', { class: 'welcome-text' }, '안녕하세요'),
          createElement(
            'div',
            { class: 'welcome-text' },
            '더 나은 개발자를 꿈꾸는',
          ),
          createElement('div', { class: 'welcome-text' }, '오다현입니다'),
        ),
      ),
    );
    $target.replaceChildren(template);
  };

  render();
}

export default Welcome;
