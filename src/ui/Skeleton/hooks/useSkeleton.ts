import {useContext} from 'react';

import {Context} from '../context/SkeletonContext';

export const useSkeleton = () => {
	return useContext(Context);
};
