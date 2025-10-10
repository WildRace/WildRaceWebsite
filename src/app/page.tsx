import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Welcome to Wild Race!</h1>
      <p>A racing game for wild animals.</p>

      <Image
        src="/logo.svg"
        alt="Wild Race Logo"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
