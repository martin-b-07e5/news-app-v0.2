import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <main className={styles.detailsContainer}>
      <h1 className={styles.detailsContainer}>Error 404</h1>
      <p className={styles.detailsContainer}>Recurso no encontrado</p>
    </main>
  );
}
