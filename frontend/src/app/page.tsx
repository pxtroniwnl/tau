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
          Travel to a real black hole and measure how much you age versus how much time passes on
          Earth.
        </p>
        <p className={styles.note}>
          Under construction · every number will come from an equation with a source.
        </p>
      </section>
    </main>
  );
}
