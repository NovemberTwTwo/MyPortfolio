import { createElement, createFragment } from '../core/CreateElement';
import useState from '../core/Hooks';
import Test2 from './Test2';

function Test($target: Element) {
  const [getCount, setCount] = useState(1);
  let count = getCount();

  const handleClick = () => {
    setCount(count + 1);
    count = getCount();
    render();
  };

  const test2_pos = createElement('div', {});
  Test2(test2_pos);

  const render = () => {
    const template = createFragment(
      createElement('h2', { class: 'H2' }, `This is Test ${count}`),
      createElement(
        'button',
        {
          onclick: handleClick,
        },
        'Test1',
      ),
      test2_pos,
    );
    $target.replaceChildren(template);
  };

  render();
}

export default Test;
