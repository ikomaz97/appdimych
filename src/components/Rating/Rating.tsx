import React from "react";

export function Rating(props: any) {
    if (props.value === 1) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )

    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )

    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )

    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
            </div>
        )

    }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )

}

function Star(props: any) {
    return <span><b>star-</b></span>;

}