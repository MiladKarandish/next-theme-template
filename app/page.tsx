import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`${styles["_"]}`}>
      <h1>A Website With Thems</h1>
      <p>There is a component for changing the theme!</p>
    </main>
  );
}
