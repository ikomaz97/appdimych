import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className={"App"}>
            <OnOff on ={switchOn} onChange={setSwitchOn} />
            {/*<UncontrolledAccordion titleValue="Menu" />*/}
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating value={ratingValue} />
            <Accordion  titleValue ={'Menu'}
                        collapsed={accordionCollapsed}
                        onChange = {()=>{setAccordionCollapsed (!accordionCollapsed)}} />
            <UncontrolledOnOff  onChange={setSwitchOn}/> {setSwitchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;