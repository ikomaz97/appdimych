import React from "react";

export function Accordion(props:any) {
    console.log("Accrdion rendering")
    return <div>
        <AccordionTitle title = {props.titleValue}/>
        <AccordionBody/>
    </div>;
}

function AccordionTitle(props: any) {
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