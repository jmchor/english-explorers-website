import { useState, useEffect } from 'react';

const useFormattedDate = (date: Date): string | null => {
	const [formattedDate, setFormattedDate] = useState<string | null>(null);

	useEffect(() => {
		const formatted = new Date(date).toLocaleDateString('en-US');
		setFormattedDate(formatted);
	}, [date]);

	return formattedDate;
};

export default useFormattedDate;
