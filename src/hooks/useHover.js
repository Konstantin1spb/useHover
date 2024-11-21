import { useEffect, useRef, useState } from 'react';

export const useHover = () => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const element = ref.current;
		console.log(element);

		element.addEventListener('mouseenter', () => {
			setHovered(true);
		});
		element.addEventListener('mouseleave', () => {
			setHovered(false);
		});

		return () => {
			element.removeEventListener('mouseenter'); // удалится?
			element.removeEventListener('mouseleave');
		};
	}, []);

	return {
		hovered,
		ref,
	};
};
