import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export const TopBar = () => {
    return (
        <div className='topbar'>
            <Typography className='topbarText'>自己紹介動画をアップロードすると優先的にレコメンドされます</Typography>
        </div>
    );
};
