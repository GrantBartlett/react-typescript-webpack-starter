
import * as React from "react";

export interface IHelloProps
{
    test: string;
}

export class Hello extends React.Component<IHelloProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <>
                {this.props.test}
            </>
        );
    }
}