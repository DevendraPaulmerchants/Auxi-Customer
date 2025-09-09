import { format} from "date-fns";
// ---------------------------- Date Format ----------------------------
export const dateAndTimeFormat = (str) => {
   if (!str) return '';
   return format(new Date(str), 'dd MMM yyyy HH:mm:ss');
}
export const dateFormat = (str) => {
   if (!str) return '';
   return format(new Date(str), 'dd MMM yyyy');
}
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