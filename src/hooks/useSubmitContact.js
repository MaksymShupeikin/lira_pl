import { useState } from 'react';

export const useSubmitContact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const submit = async (formData) => {
        setIsLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/send-contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok || result.result === 'error') {
                throw new Error(result.message || 'Network response was not ok');
            }

            setStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => setStatus(null);

    return { submit, isLoading, status, reset };
};