import styles from './styles.module.css';

export default function Cat() {
    return (
        <>   
            <a href="/facts/catFact">
                <img class={styles.img} src="/public/images/cats.jpg" alt="Cat" />
                Press for a random cat fact
            </a>
        </>
    );
}
