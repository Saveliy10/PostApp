import React from 'react';
import { useModalClasses } from '../../../hooks/useModalClasses';

const Mymodal = ({ children, visible, setVisible }) => {
    const classes = useModalClasses(visible);

    return (
        <div className={classes.rootClasses} onClick={() => setVisible(false)}>
            <div className={classes.contentClasses} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Mymodal;