import createElement from '../core/CreateElement';
import useState from '../core/Hooks';

const app = document.querySelector('#App');

function Test() {
  const [getCount, setCount] = useState(1);
  let count = getCount();

  const handleClick = () => {
    setCount(count + 1);
    count = getCount();
    render();
  };

  const render = () => {
    const template = createElement(
      'div',
      {
        id: 'Test',
        onclick: handleClick,
      },
      createElement('h2', { class: 'H2' }, `This is Test ${count}`),
    );
    app?.replaceChildren(template);
  };

  render();
}

export default Test;
