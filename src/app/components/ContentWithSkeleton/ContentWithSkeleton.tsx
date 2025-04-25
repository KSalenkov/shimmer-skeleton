import React, {CSSProperties} from 'react';

import clsx from 'clsx';

import {Skeleton} from '../../../ui/Skeleton';
import styles from './ContentWithSkeleton.module.scss';

type SideSize = number | `${number}%`;

interface ContentWithSkeletonProps {
	size: [SideSize, SideSize];
	className?: string;
}

const getValueSize = (size: SideSize) => {
	if (typeof size === 'number') {
		return `${size}px`;
	}

	return size;
};

export const ContentWithSkeleton: React.FC<ContentWithSkeletonProps> = ({size, className}) => {
	return (
		<Skeleton
			className={clsx(styles.container, className)}
			style={
				{'--element-width': getValueSize(size[0]), '--element-height': getValueSize(size[1])} as CSSProperties
			}
		>
			<div className={styles.content}>Content</div>
		</Skeleton>
	);
};
