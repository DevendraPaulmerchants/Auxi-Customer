
import PropTypes from "prop-types";
import { handleAlphabetInput } from "../../utils/helper";


function Input({ type = "text", id = '', placeholder = '', value = "", setValue, maxLength }) {
    if (type === "tel") {
        return (
            <input
                className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
                type="tel"
                id={id}
                autoComplete={type}
                required
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                placeholder="Enter 10-digit mobile number"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, "");
                    if (newValue.length <= 10) setValue(newValue);
                }}
            />
        );
    }

    if (type === "email") {

        return (
            <input
                className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
                type="email"
                id={id}
                autoComplete={type}
                maxLength={maxLength}
                required
                placeholder="Enter email address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }

    if (type === "number") {
        return (
            <input
                className="w-full text-center outline-none border border-sky-200 px-2 py-1 rounded"
                type="text"
                inputMode="numeric"
                pattern="\d{6}"
                id={id}
                autoComplete={type}
                maxLength={maxLength}
                required
                placeholder={placeholder || "Enter 6-digit number"}
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, "").slice(0, maxLength);
                    setValue(newValue);
                }}
            />
        );
    }

    return (
        <input
            className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
            type="text"
            id={id}
            autoComplete={type}
            maxLength={maxLength}
            required
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleAlphabetInput(e, setValue)}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
};

export default Input;
