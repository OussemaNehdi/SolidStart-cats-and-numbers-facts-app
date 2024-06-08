import { Title } from "@solidjs/meta";
import Cat from "../components/cat";
import Number from "../components/number";
import SavedFacts from "../components/savedFacts";
import styles from '/src/components/styles.module.css';

export default function Home() {
  return (
    <main class={styles.main}>
      <Title>Home</Title>
      <h1>Home</h1>
      {Cat()}
      {Number()}
      {SavedFacts()}
    </main>
  );
}
