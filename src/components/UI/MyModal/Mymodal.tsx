import React from 'react';
import { useModalClasses } from '../../../hooks/useModalClasses.ts';

interface MymodalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mymodal: React.FC<MymodalProps> = ({ children, visible, setVisible }) => {
    const classes = useModalClasses(visible);

    return (
        <div className={classes.rootClasses} onClick={() => setVisible(false)}>
            <div className={classes.contentClasses} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Mymodal;