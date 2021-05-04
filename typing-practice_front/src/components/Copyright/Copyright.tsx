import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Copyright: React.FC = () => (
  <Typography variant="caption" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="/">
      Your Keyboard
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);
