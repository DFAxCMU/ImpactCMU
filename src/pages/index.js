import React from 'react'
import { Helmet } from 'react-helmet'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import Hero from './Hero';

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Hero/>
    </div>
)

export default IndexPage

// import React from "react";
// import { Helmet } from "react-helmet";
// import fav16 from '../components/2025img/16.svg';
// import fav32 from '../components/2025img/32.svg';

// export const onRenderBody = ({ setHeadComponents }) => {
//     setHeadComponents([
//         <Helmet key="helmet">
//             <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
//             <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
//         </Helmet>
//     ]);
// };
