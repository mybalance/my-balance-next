import Link from 'next/link';
import NavTwo from '../components/NavTwo';
import styles from '../styles/404.module.css';

const notFound = () => {
  return (
    <div>
      <NavTwo />
      <div className={styles.container}>
        <h1 className={styles.heading}>That's a 404.</h1>
        <h3 className={styles.body}>Let's get you back on the straight and narrow, shall we?</h3>
        <h3 className={styles.body}>Click below to go home.</h3>
        <Link href='/#home-top'>
          <h1 className={styles.brand}>MyBalance.</h1>
        </Link>
      </div>
    </div>
  )
}

export default notFound;