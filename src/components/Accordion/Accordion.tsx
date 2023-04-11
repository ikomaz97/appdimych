import React from "react";

export function Accordion(props:any) {
    console.log("Accrdion rendering")
    return <div>
        <AccordionTitle />
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    return (<div>
            <h3>Меню</h3>
        </div>
    );
}

function AccordionBody(props: any) {
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