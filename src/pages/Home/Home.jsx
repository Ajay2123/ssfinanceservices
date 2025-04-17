import React from "react";

import Partners from "./subs/Partners";
import UserConversation from "./subs/UserConversation";
import LoanTypes from "./subs/LoanTypes";
import Testimonals from "./subs/Testimonals";
import Banner from "./subs/Banner";

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <Partners></Partners>
            <UserConversation></UserConversation>
            <LoanTypes></LoanTypes>
            <Testimonals></Testimonals>
        </>
    );
}
