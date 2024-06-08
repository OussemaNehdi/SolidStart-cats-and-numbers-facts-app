import { Title } from "@solidjs/meta";
import styles from '/src/components/styles.module.css';

export default function About() {
  return (
    <main class={styles.main}>
      <Title>About</Title>
      <h1>About</h1>
      <p>
        Welcome to our fun and educational app! This platform is designed to provide you with random facts about cats and numbers, making learning both engaging and entertaining.
      </p>
      <p>
        On our home page, you can easily navigate to two exciting sections:
      </p>
      <ul>
        <li>
          <strong>Cat Facts:</strong> Click on the cat image to discover interesting and random facts about cats. Whether you're a cat lover or just curious, you'll enjoy the surprising and delightful tidbits we have in store for you.
        </li>
        <li>
          <strong>Number Facts:</strong> Enter any number and click the button to learn a fascinating fact about that number. It's a great way to explore the hidden stories and unique attributes behind different numbers.
        </li>
      </ul>
      <p>
        Our goal is to combine fun with learning, providing a user-friendly experience that sparks curiosity and makes knowledge accessible to everyone. Enjoy exploring and discovering new facts with us!
      </p>
    </main>
  );
}