import React from "react";
import { Counter } from "../Counter/Counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
    const { form, setName, setText, incrementRating, decrementRating, clear } =
        useForm();
    const { name, text, rating } = form;
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <span>Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <Counter
                value={rating}
                decrement={decrementRating}
                increment={incrementRating}
            />
            <button onClick={clear}>Clear</button>
        </form>
    );
};
