import React, { Component } from "react";

export interface HelloProps
{
    message: string;
}
export class Hello extends Component<HelloProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="hello">
                <h1>{this.props.message}</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}