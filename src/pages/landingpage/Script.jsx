import { useEffect, useState } from 'react';

export default function Script(text, delay = 130) {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else {
            setTypedText((prev) => prev + '<span class="cursor">|</span>');
        }
    }, [index, text, delay]);

    return typedText;
}
