import styles from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews.map((reviews) => (
                    <li
                        key={reviews.id}
                    >{`${reviews.user}: ${reviews.text}`}</li>
                ))}
            </ul>
        </>
    );
};
