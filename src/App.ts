import React from "react";
import { Main } from "./Main";
import { createRoot } from "react-dom/client";

export class App
{
    constructor()
    {
        this.render();
    }

    private render(): void
    {
        const root = createRoot(document.getElementById("app") || document.createElement("div"));
        root.render(React.createElement(Main, { app: this }, null));
    }
}

new App();