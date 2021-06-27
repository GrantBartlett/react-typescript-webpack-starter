import React, { FC } from "react";

export interface HelloProps
{
    message: string;
}

export const Hello: FC<HelloProps> = (props) => 
{
    return (
        <div className="hello">
            <h1>{props.message}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}