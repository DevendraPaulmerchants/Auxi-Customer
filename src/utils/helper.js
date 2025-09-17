import { format } from "date-fns";
// ---------------------------- Date Format ----------------------------
export const dateAndTimeFormat = (str) => {
    if (!str) return '';
    return format(new Date(str), 'dd MMM yyyy HH:mm:ss');
}

export const dateFormat = (str) => {
    if (!str) return '';
    return format(new Date(str), 'dd MMM yyyy');
}

export const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// ---------------------------- Validate PAN Number with API ----------------------------
export const handlePANCardNumber = async (e, setValue, setValid) => {
    const input = e.target.value.toUpperCase();
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    setValue(input);
    if (panRegex.test(input)) {
        setValid(true);
    } else {
        setValid(false);
    }
};
// --------------------------- Input with only alphabets ---------------------------
export const handleAlphabetInput = (e, setValue) => {
    let newValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    newValue = newValue.replace(/\s+/g, " ");
    newValue = newValue
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    setValue(newValue);
};
// --------------------------- Input with only numbers ---------------------------
export const handleNumericInput = (e, setValue) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setValue(newValue);
};