import React from "react";

import Recognition from "./subs/Recognitions";
import Banner from "./subs/Banner";
import Statstics from "./subs/Statstics";

const AboutPage = () => {
    return (
        <main>
            <Banner />
            <Statstics />
            <Recognition />
        </main>
    );
};

export default AboutPage;
