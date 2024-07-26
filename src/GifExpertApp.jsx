import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gif */}
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
