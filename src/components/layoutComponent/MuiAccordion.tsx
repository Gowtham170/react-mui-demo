import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';

import {
    ExpandMore
} from '@mui/icons-material';

const MuiAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false);
    }
    console.log(expanded);
    
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
            <AccordionSummary 
                id='panel1-header' 
                aria-controls='panel1-content'
                expandIcon={<ExpandMore/>}> 
                    <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    It's used for building interactive user interfaces 
                    and web applications quickly and efficiently with 
                    significantly less code than you would with vanilla 
                    JavaScript.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
            <AccordionSummary 
                id='panel2-header' 
                aria-controls='panel2-content'
                expandIcon={<ExpandMore/>}>
                    <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    It's used for building interactive user interfaces 
                    and web applications quickly and efficiently with 
                    significantly less code than you would with vanilla 
                    JavaScript.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion;