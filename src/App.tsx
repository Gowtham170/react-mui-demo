import './App.css';
import { 
  MuiTypography, 
  MuiButton,
  MuiTextField,
  MuiSelect,
  MuiRadioButton
} from './components/index';

function App() {
  return (
    <div className="App">
        {/* Typography */}
        <MuiTypography/>
        <hr/>
        {/* Button, ButtonGroup, ToggleButton, ToggleButtonGroup */}
        <MuiButton/>
        <hr/>
        {/* TextField */}
        <MuiTextField/>
        <hr/>
        {/* Select */}
        <MuiSelect/>
        <hr/>
        {/* RadioButton */}
        <MuiRadioButton/>
        <hr/>
    </div>
  );
}

export default App;
