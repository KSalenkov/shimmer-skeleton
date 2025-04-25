import React, {CSSProperties, PropsWithChildren} from 'react';

import clsx from 'clsx';

import {useSkeleton} from '../../hooks/useSkeleton';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	style?: CSSProperties;
}

export const Skeleton: React.FC<PropsWithChildren<SkeletonProps>> = ({className, children, style}) => {
	const {isLoading} = useSkeleton();

	return (
		<div
			className={clsx(styles.container, className)}
			style={style}
		>
			{isLoading ? <div className={styles.skeleton} /> : children}
		</div>
	);
};
