import React, { useState } from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes, TEINode } from "react-teirouter"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import Lemma from './lemma.tsx'

interface TEIProps {
    teiNode: Node
    availableRoutes?: string[]
}
  

const App = ({teiNode, availableRoutes}: TEIProps) => {
    const appEl = teiNode as Element
    const main = appEl.querySelector('tei-lem') || appEl.querySelector('tei-rdg')
    const other = appEl.querySelectorAll('tei-rdg')

    console.log(availableRoutes)

    if (!appEl.querySelector('tei-lem')) {
        main?.setAttribute("n", "")
        main?.setAttribute("source", "")
    }

    if (!main || !other) return null

    

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;
    return (
        <Behavior node={teiNode}>
            <span className="app">
                <span className='main' aria-describedby={id} onClick={handleClick} >
                    <TEINode 
                        teiNode={main} 
                        availableRoutes={availableRoutes} />
                </span>
                <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody>
                        <TEINodes 
                            teiNodes={other} 
                            availableRoutes={availableRoutes} />
                    </PopupBody>
            </BasePopup>
            </span>
        </Behavior>
    )
}

export default App

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