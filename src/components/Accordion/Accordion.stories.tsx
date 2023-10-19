import type { Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Accordion from './Accordion';
import React, {useState} from "react";
export default  {
    component: Accordion,
};
export const CollapsedAccordion = () => {
    return <Accordion  titleValue ={'Menu'}
                       collapsed={true}
                       onChange = {()=>{}} />
};

export const OpenedAccordion = () => {
    return <Accordion  titleValue ={'Menu'}
                       collapsed={false}
                       onChange = {()=>{}} />
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion  titleValue ={'Accordion'}
                       collapsed={collapsed}
                       onChange = {()=>{setCollapsed(!collapsed)}} />
};