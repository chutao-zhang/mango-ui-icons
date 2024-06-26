import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DownloadOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M13 5v6h1.17L12 13.17L9.83 11H11V5h2m2-2H9v6H5l7 7l7-7h-4V3m4 15H5v2h14v-2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DownloadOutlined;