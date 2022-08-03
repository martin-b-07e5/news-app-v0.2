import styles from "./Empty.module.css";

// rf snippet
export function Empty() {
  return (
    <div data-testid="empty" className={styles.empty}>
      No Results
    </div>
  );
}
