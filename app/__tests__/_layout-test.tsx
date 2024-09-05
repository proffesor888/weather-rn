import React from "react";
import Layout from "../_layout";
import { render,screen } from "@testing-library/react";

describe("<Layout />", () => {
    test("renders", () => {
        const {container} = render(<Layout />)
        container.querySelector("body")
    })
})