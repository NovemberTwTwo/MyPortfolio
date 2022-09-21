import './css/style.scss';
import Test from './components/Test';
import createElement from './core/CreateElement';

const app = document.getElementById('App');
const testDiv = Test();

app?.appendChild(testDiv);
