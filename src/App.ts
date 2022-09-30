import Menubar from './components/Menubar';
import Welcome from './components/Welcome';
import { createElement } from './core/CreateElement';

function App($target: Element) {
  const render = () => {
    const template = createElement(
      'div',
      { id: 'TestApp' },
      Menubar(),
      Welcome(),
    );
    $target.replaceChildren(template);
  };

  render();
}

export default App;
