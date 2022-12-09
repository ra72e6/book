import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeTitle}>
      <p>
        <a href="https://client-gold-mu.vercel.app/">
          리뷰를 작성하려면 클릭해주세요.
        </a>
      </p>
    </div>
  );
}
