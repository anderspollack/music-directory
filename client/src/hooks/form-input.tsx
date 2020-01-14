import { useState, FormEvent } from "react";

/**
 * hook for using form input
 */
function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: FormEvent) => {
        let element = event.currentTarget as HTMLInputElement;
        setValue(element.value);
    }

    return {
        value,
        onChange: handleChange,
    };
};

export default useFormInput;