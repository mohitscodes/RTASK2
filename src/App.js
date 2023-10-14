import ColorPicker from './components/ColorPicker';
import './index.css';
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'black',
  'gray',
  'pink',
  'purple',
  'brown',
  'cyan',
  'magenta',
];

const App = () => {
  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
