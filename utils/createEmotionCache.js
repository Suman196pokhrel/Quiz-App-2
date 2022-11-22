import createCache from "@emotion/cache";

const createEmotinCache = ()=>{
    return createCache({key:'css',prepend:true});
};

export default createEmotinCache;