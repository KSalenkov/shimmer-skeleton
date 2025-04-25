import {createContext} from 'react';

interface SkeletonContext {
	isLoading: boolean;
}

const defaultContext: SkeletonContext = {
	isLoading: false,
};

export const Context = createContext<SkeletonContext>(defaultContext);
