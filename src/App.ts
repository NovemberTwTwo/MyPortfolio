import { createElement } from './core/CreateElement';
import Test from './components/Test';

function App($target: Element) {
  const render = () => {
    const template = createElement('div', { id: 'TestApp' });
    Test(template);
    $target.replaceChildren(template);
  };

  render();
}

export default App;
