import { useState } from "react";

function BuyGold() {
    const liveRate = 10909.45; // ₹ per gram (you can fetch from API later)
    const [mode, setMode] = useState("rupees"); // "rupees" | "grams"
    const [value, setValue] = useState(0);

    const rupees = mode === "rupees" ? Number(value) : value ? (Number(value) * liveRate).toFixed(2) : "";
    const grams = mode === "grams" ? Number(value) : value ? (Number(value) / liveRate).toFixed(4) : "";

    return (
        <div className="max-w-sm mx-auto p-4">
            {/* Header */}
            <div className="flex justify-between bg-gray-100 rounded-t-lg p-3 text-sm">
                <div>
                    <p className="text-gray-500">Live Buy Price</p>
                    <p className="font-medium">₹ {liveRate.toLocaleString()}/g</p>
                </div>
                <div>
                    <p className="text-gray-500">Purity</p>
                    <p className="font-medium">24K 99.99%</p>
                </div>
            </div>


            <form className="bg-[var(--primary-color)] text-white rounded-b-lg p-5">
                {/* Mode Switch */}
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
                        Buy in Rupees
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
                        Buy in Grams
                    </label>
                </div>
                <div className="flex items-center justify-between border-b-[2px] border-[rgba(#fff)]">
                    <div className="text-2xl font-bold mb-1">
                        {mode === "rupees" ? "₹" : ""}{" "}
                        <input
                            type="text"
                            required
                            value={value}
                            onChange={(e) => {
                                let newValue = e.target.value;
                                if (mode === "rupees") {
                                    if (newValue === "") return setValue("");
                                    const num = Number(newValue);
                                    if(num > 1000000){
                                        alert("More then 10 lakh not allowed..")
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
                            placeholder={mode === "rupees" ? "Enter amount" : "Enter grams"}
                        />{" "}
                        {mode === "grams" ? "g" : ""}
                    </div>

                    <p className="text-right text-sm opacity-80">
                        {mode === "rupees" ? `= ${grams || 0} g` : `= ₹ ${rupees || 0}`}
                    </p>
                </div>

                <button className="mt-4 bg-white cursor-pointer text-teal-600 font-medium px-5 py-2 rounded shadow hover:bg-gray-100">
                    Buy Gold →
                </button>
            </form>

        </div>
    );
}

export default BuyGold;
