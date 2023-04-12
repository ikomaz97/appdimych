import React from "react";

type AccordionPropsType = {
    titleValue: string
}
function Accordion(props:AccordionPropsType) {
    console.log("Accrdion rendering")
    return <div>
        <AccordionTitle title = {props.titleValue}/>
        <AccordionBody/>
    </div>;
}

type AccordionTitleProps = {
    title: string
}

function AccordionTitle(props: AccordionTitleProps) {
    return (<div>
            <h3>(props.title)</h3>
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