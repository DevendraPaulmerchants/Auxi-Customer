import React, { useState } from 'react';

const rate = {
    gold: {
        Buy: 10909.45,
        Sell: 10609.45,
        Transfer: 10909.45,
        Conversion: 10609.45,
    },
    silver: {
        Buy: 109.45,
        Sell: 106.45,
        Transfer: 109.45,
        Conversion: 106.45,
    },
};


const metalMap = {
    AU: "gold",
    AG: "silver",
};

function BuyMetal({ metal = 'AU', method = 'Buy' }) {

    const liveRate = rate?.[metalMap[metal]]?.[method]

    const [mode, setMode] = useState("rupees");
    const [value, setValue] = useState("0");

    const rupees =
        mode === "rupees"
            ? Number(value)
            : value
                ? (Number(value) * liveRate).toFixed(2)
                : "";

    const grams =
        mode === "grams"
            ? Number(value)
            : value
                ? (Number(value) / liveRate).toFixed(4)
                : "";

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${method} ${metal === "AU" ? "Gold" : "Silver"} at rate ₹${liveRate}/g`);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between bg-gray-100 rounded-t-lg p-3 text-sm">
                <div>
                    <p className="text-gray-500">Live {method} Price</p>
                    <p className="font-medium">₹ {liveRate?.toLocaleString()}/g</p>
                </div>
                <div>
                    <p className="text-gray-500">Purity</p>
                    <p className="font-medium">{metal === "AU" ? "24K" : ""} 99.99%</p>
                </div>
            </div>

            <form
                className="bg-[var(--primary-color)] text-white rounded-b-lg p-5"
                onSubmit={handleSubmit}
            >
                {/* Switch input mode */}
                <div className="flex justify-between text-sm mb-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            checked={mode === "rupees"}
                            onChange={() => {
                                setValue(rupees);
                                setMode("rupees");
                            }}
                        />
                        {method} in Rupees
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            checked={mode === "grams"}
                            onChange={() => {
                                setValue(grams);
                                setMode("grams");
                            }}
                        />
                        {method} in Grams
                    </label>
                </div>

                {/* Value input */}
                <div className="flex items-center justify-between border-b-[2px] border-white">
                    <div className="text-[20px] font-semibold mb-1">
                        {mode === "rupees" ? "₹ " : ""}
                        <input
                            type="text"
                            required
                            value={value}
                            onChange={(e) => {
                                let newValue = e.target.value;
                                if (mode === "rupees") {
                                    if (newValue === "") return setValue("");
                                    const num = Number(newValue);
                                    if (num > 1000000) {
                                        alert("More than 10 lakh not allowed..");
                                        return;
                                    }
                                    setValue(num);
                                }

                                if (mode === "grams") {
                                    if (newValue === "") return setValue("");
                                    const num = Number(newValue);
                                    if (num >= 0.1 && num <= 10000) {
                                        setValue(newValue);
                                    } else if (num > 10000) {
                                        setValue(10000);
                                    }
                                }
                            }}
                            className="bg-transparent outline-none w-40"
                            placeholder={
                                mode === "rupees" ? "Enter amount" : "Enter grams"
                            }
                        />
                        {mode === "grams" ? " g" : ""}
                    </div>

                    <p className="text-right text-sm opacity-80">
                        {mode === "rupees"
                            ? `= ${grams >= 1000 ? grams/1000+'kg' : grams+'g' || 0+'g'}`
                            : `= ₹ ${rupees || 0}`}
                    </p>
                </div>

                <button className="w-full cursor-pointer mt-8 bg-white text-[var(--primary-color)] font-semibold px-5 py-2 rounded shadow hover:bg-gray-300 hover:scale-102 transition-all duration-300">
                    {method} {metal === "AU" ? "Gold" : "Silver"} →
                </button>
            </form>
        </div>
    );
}

export default BuyMetal;
