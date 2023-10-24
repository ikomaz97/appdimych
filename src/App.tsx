import React, { useState } from "react";
import "./App.css";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <OnOff on={switchOn} onChange={setSwitchOn} />
            <Rating value={ratingValue} onClick={setRatingValue} /> {/* Добавляем свойство onClick */}
            <UncontrolledRating value={ratingValue} onChange={setRatingValue} /> {/* Добавляем свойство onChange */}
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />
            <UncontrolledAccordion titleValue={'Menu'} /> {/* Указываем titleValue */}
            <UncontrolledOnOff onChange={setSwitchOn} />
            {switchOn.toString()}
        </div>
    );
}

export default App;