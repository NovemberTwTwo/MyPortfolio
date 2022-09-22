import { createElement, createFragment } from '../core/CreateElement';
import useState from '../core/Hooks';

const [getNumber, setNumber] = useState(1);
let num = getNumber();

function Test2($target: Element) {
  const handleClick = () => {
    setNumber(num + 2);
    num = getNumber();
    render();
  };

  const render = () => {
    const template = createFragment(
      createElement('h3', { class: 'h3' }, `This is Test ${num}`),
      createElement(
        'button',
        {
          onclick: handleClick,
        },
        'Test2',
      ),
    );
    $target.replaceChildren(template);
  };

  render();
}

export default Test2;
