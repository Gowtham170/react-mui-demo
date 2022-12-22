import React, { useState } from 'react';
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup
} from '@mui/material';

import {
    BookmarkBorder,
    Bookmark
} from '@mui/icons-material';

const MuiCheckbox = () => {

    const [accept, setAccept] = useState(false);

    const [skills, setSkills] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    }

    console.log(skills);
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel 
                label="I accept terms and condition"
                control={<Checkbox 
                    checked={accept} 
                    onChange={handleChange}
                />}
            />
        </Box>
        <Box>
            <Checkbox 
                icon={<BookmarkBorder/>}
                checkedIcon={<Bookmark/>}
                checked={accept} 
                onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label="HTML"
                        control={<Checkbox 
                            value='html'
                            checked={skills.includes('html')} 
                            onChange={handleSkillChange}/>}
                    />
                        <FormControlLabel 
                        label="CSS"
                        control={<Checkbox 
                            value='css'
                            checked={skills.includes('css')} 
                            onChange={handleSkillChange}/>}
                    />
                        <FormControlLabel 
                        label="Javascript"
                        control={<Checkbox 
                            value='js'
                            checked={skills.includes('js')} 
                            onChange={handleSkillChange}/>}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox;
