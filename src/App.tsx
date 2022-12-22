import './App.css';
import { 
  MuiTypography, 
  MuiButton,
  MuiTextField,
  MuiSelect,
  MuiRadioButton,
  MuiCheckBox,
  MuiSwitch,
  MuiAutoComplete
} from './components/inputComponent/index';
import {
  MuiLayout,
  MuiCard,
  MuiAccordion,
  MuiImageList
} from './components/layoutComponent/index';

function App() {
  return (
    <div className="App">
        {/* Input Component */}

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
        {/* Checkbox */}
        <MuiCheckBox/>
        <hr/>
        {/* Switch */}
        <MuiSwitch/>
        <hr/>
        {/* Autocomplet */}
        <MuiAutoComplete/>
        <hr/>

        {/* Layout Component */}

        <MuiLayout/>
        <hr/>
        {/* Card Component */}
        <MuiCard/>
        <hr/>
        {/* Accordion Component */}
        <MuiAccordion/>
        <hr/>
        {/* ImageList Component */}
        <MuiImageList/>
        <hr/>
    </div>
  );
}

export default App;
