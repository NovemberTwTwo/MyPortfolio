import createElement from '../core/CreateElement';
import useState from '../core/Hooks';

const Test = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count() + 1);
  };

  return createElement(
    'div',
    {
      id: 'Test',
      onclick: handleClick,
    },
    createElement('h2', { class: 'H2' }, 'This is Test'),
  );
};

export default Test;
