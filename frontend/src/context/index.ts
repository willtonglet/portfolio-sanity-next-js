import { createContext } from 'react';

const Context = createContext<PageProps>({
    content: {}
});

export default Context;
