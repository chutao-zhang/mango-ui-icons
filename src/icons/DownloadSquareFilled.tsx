import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DownloadSquareFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download-square', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m3 14h8v-2H8v2m8-7h-2.5V7h-3v3H8l4 4l4-4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DownloadSquareFilled;