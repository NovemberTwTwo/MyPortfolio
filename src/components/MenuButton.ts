import { createElement, createFragment } from '../core/CreateElement';
import useState from '../core/Hooks';

function MenuButton(buttonText: string) {
  const $target = createElement('div', {});

  const [getCount, setCount] = useState(1);
  let count = getCount();

  const handleClick = () => {
    setCount(count + 1);
    count = getCount();
    render();
  };

  const render = () => {
    const template = createElement(
      'button',
      {
        onClick: handleClick,
      },
      createElement('span', {}, `${buttonText} ${count}`),
    );
    $target.replaceChildren(template);
  };
  render();

  return $target;
}

export default MenuButton;
