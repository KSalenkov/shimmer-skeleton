import React, {PropsWithChildren, useMemo} from 'react';

import {Context} from '../../context/SkeletonContext';

interface SkeletonProviderProps {
	isLoading: boolean;
}

export const SkeletonProvider: React.FC<PropsWithChildren<SkeletonProviderProps>> = ({isLoading, children}) => {
	const contextValue = useMemo(
		() => ({
			isLoading,
		}),
		[isLoading],
	);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
