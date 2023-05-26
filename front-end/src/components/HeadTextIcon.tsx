import React from 'react';
import HeadsetIcon from '@mui/icons-material/Headset';
import { IconCircleBox } from '../shared/theme/buttons';
import { GridProps, Grid, Typography } from '@mui/material';

const HeadTextIcon: React.FC<{ icon?: string; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <Grid container spacing={2} alignItems={'center'} mb={6}>
      <Grid item>
        <IconCircleBox radius="50%">
          <HeadsetIcon />
        </IconCircleBox>
      </Grid>
      <Grid item>
        <Typography variant="h1"> {text}</Typography>
      </Grid>
    </Grid>
  );
};

export default HeadTextIcon;
