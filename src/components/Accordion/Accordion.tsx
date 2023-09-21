import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string;
};

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleAccordion = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion} />
            {!isCollapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string;
    toggleAccordion: () => void;
};

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <div>
            <button onClick={props.toggleAccordion}>{props.title}</button>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default Accordion;