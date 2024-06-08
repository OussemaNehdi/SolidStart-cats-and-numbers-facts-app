import styles from './styles.module.css';

export default function Number() {
    return (
        <>   
            <a href="/facts/numberFact">
                <img class={styles.img} src="/public/images/numbers.jpg" alt="Number" />
                Press for a number fact
            </a>
        </>
    );
}
