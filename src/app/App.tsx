import React, {useState} from 'react';

import {SkeletonProvider} from '../ui/Skeleton';
import styles from './App.module.scss';
import {ContentWithSkeleton} from './components/ContentWithSkeleton/ContentWithSkeleton';

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const toggle = () => setIsLoading((prev) => !prev);

	return (
		<SkeletonProvider isLoading={isLoading}>
			<div className={styles.container}>
				<div className={styles.header}>
					<ContentWithSkeleton size={[120, 42]} />

					<button
						className={styles.button}
						onClick={toggle}
					>
						Toggle loading
					</button>

					<div className={styles.row}>
						<ContentWithSkeleton size={[96, 24]} />
						<ContentWithSkeleton size={[96, 24]} />
						<ContentWithSkeleton size={[96, 24]} />
					</div>
				</div>

				<ContentWithSkeleton size={['100%', 180]} />

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsContainer}>
						<ContentWithSkeleton size={[140, 24]} />

						<div className={styles.row}>
							<div className={styles.card}>
								<div className={styles.visibleImage} />

								<div className={styles.content}>
									<ContentWithSkeleton size={[120, 20]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['80%', 16]} />
								</div>
							</div>

							<div className={styles.card}>
								<ContentWithSkeleton size={['100%', 160]} />

								<div className={styles.content}>
									<ContentWithSkeleton size={[120, 20]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['80%', 16]} />
								</div>
							</div>

							<div className={styles.card}>
								<ContentWithSkeleton size={['100%', 160]} />

								<div className={styles.content}>
									<ContentWithSkeleton size={[120, 20]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['100%', 16]} />
									<ContentWithSkeleton size={['80%', 16]} />
								</div>
							</div>
						</div>
					</div>

					<div className={styles.profileCard}>
						<div className={styles.avatarContainer}>
							<ContentWithSkeleton
								className={styles.avatar}
								size={[64, 64]}
							/>
						</div>

						<ContentWithSkeleton size={[144, 20]} />
						<ContentWithSkeleton size={[160, 16]} />

						<div className={styles.content}>
							<ContentWithSkeleton size={['100%', 24]} />
							<ContentWithSkeleton size={['100%', 24]} />
							<ContentWithSkeleton size={['100%', 24]} />
							<ContentWithSkeleton size={['100%', 24]} />
						</div>
					</div>
				</div>

				<ContentWithSkeleton size={['100%', 24]} />
				<ContentWithSkeleton size={['60%', 24]} />

				<div className={styles.row}>
					<ContentWithSkeleton size={[144, 24]} />
					<ContentWithSkeleton size={[144, 24]} />
					<ContentWithSkeleton size={[144, 24]} />
				</div>
			</div>
		</SkeletonProvider>
	);
};

export default App;
