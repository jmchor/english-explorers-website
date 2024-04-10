import { useState, useEffect } from 'react';

const useFormattedDate = (date: Date): string | null => {
	const [formattedDate, setFormattedDate] = useState<string | null>(null);

	useEffect(() => {
		const formatted = new Date(date).toLocaleDateString('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
		setFormattedDate(formatted);
	}, [date]);

	return formattedDate;
};

export default useFormattedDate;
