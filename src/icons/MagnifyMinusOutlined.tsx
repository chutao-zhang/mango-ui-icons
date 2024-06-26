import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const MagnifyMinusOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-magnify-minus', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 0 0 9.5 3A6.5 6.5 0 0 0 3 9.5A6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5l1.5-1.5l-5-5m-6 0C7 14 5 12 5 9.5S7 5 9.5 5S14 7 14 9.5S12 14 9.5 14M7 9h5v1H7V9Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default MagnifyMinusOutlined;