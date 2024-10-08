import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const Unclear = ({teiNode, availableRoutes}: TEIProps) => {
    const el = teiNode as Element

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    
    const handleEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const handleLeave = () => {
        setAnchor(null)
    }

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Behavior node={el}>
            <span className="unclear" aria-describedby={id} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <TEINodes 
                teiNodes={el.childNodes} 
                availableRoutes={availableRoutes} />
            </span>
            <BasePopup id={id} open={open} anchor={anchor}>
                <PopupBody>
                    Agent: {el.getAttribute("agent")} | Reason: {el.getAttribute("reason")}
                </PopupBody>
            </BasePopup>
        </Behavior>
    )
}

export default Unclear

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

const PopupBody = styled('div')(
    ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    z-index: 1;
  `,
  );