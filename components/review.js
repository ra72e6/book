import Link from 'next/link';
import styles from '../styles/review.css';
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">홈</Link>
        <Link href="/profile">내 프로필</Link>
        <Link href="/about">관련 링크</Link>
        <Link href="/team">팀 프로젝트</Link>
      </div>
    </div>
  );
}
