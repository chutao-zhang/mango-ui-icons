import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DotsHorizontalCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-dots-horizontal-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m0 6.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-4.5 0A1.5 1.5 0 0 1 9 12a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6 12a1.5 1.5 0 0 1 1.5-1.5m9 0A1.5 1.5 0 0 1 18 12a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 15 12a1.5 1.5 0 0 1 1.5-1.5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DotsHorizontalCircleOutlined;