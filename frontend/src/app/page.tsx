import Image from "next/image";
import glass from "@/ui/styles/glass.module.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/brand/tau.svg" alt="Tau" width={160} height={160} priority />
      <section className={glass.panel}>
        <h1 className={styles.title}>Tau</h1>
        <p className={styles.lead}>
          Viaja a un agujero negro real y mide cuánto envejeces tú y cuánto la Tierra.
        </p>
        <p className={styles.note}>
          En construcción · cada número saldrá de una ecuación con fuente.
        </p>
      </section>
    </main>
  );
}
