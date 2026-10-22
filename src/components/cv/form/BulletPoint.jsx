import { useRef, useState } from "react";

function BulletTextarea({ placeholder = "", value = [""], onChange }) {
    const inputRefs = useRef([]);
    const items = value.length > 0 ? value : [""];

    const handleChange = (index, newValue) => {
        const newItems = [...items];
        newItems[index] = newValue;
        onChange(newItems);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const newItems = [...items];
            newItems.splice(index + 1, 0, "");
            onChange(newItems);

            requestAnimationFrame(() => {
                inputRefs.current[index + 1]?.focus();
            });
        }

        if (event.key === "Backspace" && items[index] === "" && items.length > 1) {
            event.preventDefault();

            event.preventDefault();

            const newItems = [...items];
            newItems.splice(index, 1);
            onChange(newItems);

            requestAnimationFrame(() => {
                inputRefs.current[Math.max(0, index - 1)]?.focus();
            });
        }
    };

    return (
        <div className="rounded-lg border border-[#E7ECF2] bg-[#FAFBFD] py-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <span className="pl-3">•</span>

                    <input
                        ref={(element) => {
                            inputRefs.current[index] = element;
                        }}
                        type="text"
                        value={item}
                        onChange={(event) => handleChange(index, event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        placeholder={placeholder}
                        className="font-primary text-primary min-w-0 flex-1 pr-3.75 pl-2.5 text-sm outline-none"
                    />
                </div>
            ))}
        </div>
    );
}

export default BulletTextarea;
