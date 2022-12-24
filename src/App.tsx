import './App.css';
import MuiTable from './components/dispalyComponent/MuiTable';
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
import MuiResponsiveness from './components/MuiResponsiveness';
import {
  MuiLink,
  MuiNavbar,
  MuiBreadcrumbs,
  MuiDrawer,
  MuiSpeedDial
} from './components/navigation/index';

import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
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

        {/* Navigation Component */}

        {/* Navbar */}
         <MuiNavbar/>
        <hr/>
        {/* Link */}
        <MuiLink/>
        <hr/>
        {/* Breadcrumbs */}
        <MuiBreadcrumbs/>
        <hr/>
        {/* Drawer */}
        <MuiDrawer/>
        <hr/>
        {/* SpeedDial */}
        <MuiSpeedDial/>
        <hr/>

        {/* DiaplayComponent */}

        {/* Table */}
        <MuiTable/>
        <hr/>

        {/* Responsiveness */}
        <MuiResponsiveness/>
        <hr/>
    </div>
    </ThemeProvider>
  );
}

export default App;
