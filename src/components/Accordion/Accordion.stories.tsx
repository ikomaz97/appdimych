// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';

import Accordion from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
export const FirstStory: Story = {
    args: {
        titleValue: "hello",
        collapsed: true,
        onChange:()=>{}
    },

}
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