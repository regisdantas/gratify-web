import {createPortal} from 'react-dom';

interface IHeaderPortalProps {
    children: React.ReactNode;
}

export const HeaderPortal: React.FC<IHeaderPortalProps> = ({children}) => {
    const headerPortalElement = document.getElementById('header-portal');
    if (!headerPortalElement) {
        return null;
    }
    return createPortal(children, headerPortalElement);
};
