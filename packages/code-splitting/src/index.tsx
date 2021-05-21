import React, { Suspense, useEffect, useState } from 'react';
import { render } from 'react-dom';

const LazyComponent = React.lazy(() => import('./lazy-component'));
const LazyComponentUnused = React.lazy(() => import('./lazy-component-unused'));

const App = () => {
    const [foo, setFoo] = useState('');

    useEffect(async () => {
        const { foo } = await import('./try-to-shake-tree');

        setFoo(foo);
    }, []);
    
    return (
        <> 
            <h2>Suspense List:</h2>
            <Suspense style={{ border: '1px solid black'}} fallback={<div>Loading...</div>}>
                <LazyComponent />
                <p>Foo: {foo}</p>
            </Suspense>

            <h2>Suspense Lazy</h2>
            <Suspense style={{ border: '1px solid black'}}  fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>

            <h2>Suspense Foo</h2>
            <Suspense style={{ border: '1px solid black'}}  fallback={<div>Loading...</div>}>
                <p>Foo: {foo}</p>
            </Suspense>
        </>
    )
};

render(< App />, document.getElementById("root"));