import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className={"App"}>
            <OnOff />
            <UncontrolledAccordion titleValue="Menu" />
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating value={ratingValue} />
            {/*<Accordion titleValue ={'Menu'} />*/}
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