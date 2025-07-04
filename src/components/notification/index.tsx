import React from 'react';
import {Alert, AlertTitle, Snackbar} from '@mui/material';

export interface NotificationData {
  won: boolean;
  title: string;
  description?: string;
}

export interface Notification {
  open: boolean;
  data: NotificationData | null;
}


export const Notification = ({open, data}: Notification) => {

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      sx={{width: '600px'}
      }
    >
      <Alert
        severity={data?.won ? 'success' : 'error'}
        variant="filled"
        sx={{width: '100%'}}
      >
        {data && <>
           <AlertTitle>{data.title}</AlertTitle>
          {data.description}
        </>}
      </Alert>
    </Snackbar>
  )
};
