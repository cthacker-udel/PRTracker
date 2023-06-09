"use-client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>{"To Login"}</Button>
    </main>
  );
}
