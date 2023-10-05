import React, { Suspense, lazy } from "react";
import { RingLoader } from "react-spinners";

const _Sliders = lazy(()=>delay(import('./Sliders'), 500));
export default React.memo(function SlidersComponent(_props: {}) {
    return(<>
        <Suspense fallback={<Loading />}>
            <_Sliders />
        </Suspense>
    </>);
});

const Loading = React.memo(function() {
    return(<div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RingLoader color={'#EC7C26'} />
    </div>);
});

function delay(promise: any, time: number) {
    return new Promise((resolve)=>setTimeout(resolve, time))
        .then(()=>(promise));
}