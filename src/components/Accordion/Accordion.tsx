import React from "react";



export type AccordionPropsType = {
    titleValue: string;
    onChange:()=>void
    collapsed: boolean
};

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    return (
        <div>
            <AccordionTitle title={props.titleValue}
            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    title: string
    onChange:()=>void
};

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <div>
            <h3 onClick={(event)=>props.onChange()}>---{props.title}---</h3>
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


//
//
// import React, { useState } from "react";
// type AccordionPropsType = {
//     titleValue: string;
//     title: string
// };
//
// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendering");
//
//     const [Collapsed, setCollapsed] = useState(false);
//
//     const toggleAccordion = () => {
//         setCollapsed(!Collapsed);
//     };
//
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion} />
//             {!Collapsed && <AccordionBody />}
//         </div>
//     );
// }
//
// type AccordionTitleProps = {
//     title: string;
//     toggleAccordion: () => void;
// };
//
// function AccordionTitle(props: AccordionTitleProps) {
//     return (
//         <div>
//             <button onClick={props.toggleAccordion}>{props.title}</button>
//         </div>
//     );
// }
//
// function AccordionBody() {
//     return (
//         <div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//         </div>
//     );
// }
//
// export default Accordion;