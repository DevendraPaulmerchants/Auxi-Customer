import PropTypes from "prop-types";

function Input({ type = "text", value = "", setValue }) {
    if (type === "tel") {
        return (
            <input
                className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
                type="tel"
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
                placeholder="Enter email address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }

    return (
        <input
            className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
            type="text"
            placeholder="Enter text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
};

export default Input;
