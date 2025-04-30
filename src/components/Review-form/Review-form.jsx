import { Counter } from "../Counter/Counter";
import { useForm } from "./use-form";
import { Button } from "../Button/Button";
import styles from "./Review-form.module.css";
import star from "../../assets/Star.svg";
import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";

export const ReviewForm = ({ onSubmit, isSubmitButtonDisabled }) => {
    const { form, setName, setText, incrementRating, decrementRating, clear } =
        useForm();
    const { name, text, rating } = form;
    const { auth } = use(AuthContext);
    const { userId } = auth;
    return (
        <>
            <h3>Review Form</h3>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
                <div className={styles.name}>
                    <span>Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.text}>
                    <span>Text</span>
                    <textarea
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className={styles.counter}>
                    <img src={star} className={styles.star} />
                    <Counter
                        value={rating}
                        decrement={decrementRating}
                        increment={incrementRating}
                    />
                </div>
                <div className={styles.button}>
                    <Button onClick={clear} title={"Clear"} size={"400"} />
                    <Button
                        title={"Submit"}
                        disabled={isSubmitButtonDisabled}
                        size={"400"}
                        onClick={() => onSubmit({ text, rating, userId })}
                    />
                </div>
            </form>
        </>
    );
};
