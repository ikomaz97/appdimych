import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
function App(props:any) {
       return (
        <div>
            <OnOff/>
            <OnOff/>
            <OnOff/>
           {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My frends"}/>*/}
            {/*<UncontrolledRating value = {0}/>
            <UncontrolledRating value = {1}/>
            <UncontrolledRating value = {2}/>
            <UncontrolledRating value = {3}/>
            <UncontrolledRating value = {4}/>
            <UncontrolledRating value = {5}/>
            <Accordion titleValue = "Menu"/>
            <Accordion titleValue = "Users"/>*/}
            <UncontrolledAccordion titleValue = "Menu"/>
            <UncontrolledAccordion titleValue = "Users"/>

                   </div>

    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;