import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DownloadCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2M8 17h8v-2H8v2m8-7h-2.5V6h-3v4H8l4 4l4-4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DownloadCircleFilled;