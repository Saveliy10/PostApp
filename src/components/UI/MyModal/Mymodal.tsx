import { useModalClasses } from '../../../hooks/useModalClasses.ts';
import type { ReactNode, FC, MouseEvent, Dispatch, SetStateAction } from 'react';

interface Props {
    children: ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const Mymodal: FC<Props> = ({ children, visible, setVisible }) => {
    const classes = useModalClasses(visible);

    return (
        <div className={classes.rootClasses} onClick={() => setVisible(false)}>
            <div className={classes.contentClasses} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Mymodal;