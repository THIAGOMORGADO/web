import styles from './header.module.css'

export function Header() {
  return(
    <header className={styles.container}>
        <div className={styles.content}>
          <h1>L O G O</h1>
          
          <nav>
            
            <ul>
              <li><a href="http://">Home</a></li>
              <li><a href="http://">Sobre</a></li>
              <li><a href="http://">Produtos</a></li>
              <li className={styles.btnArea}>
                <a 
                  href="http://" className={styles['btn-signin']}>
                  Junte-se a nos
                </a></li>
            </ul>
          </nav>
        </div>
        <section className={styles.sectionHeader}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionLeft}>
              <h1>junte se a nos para gerar uma renda extra com nosso produtos e servicos</h1>
              <p>Expert services in Indian taxation & investment advisory.</p>
              <div className={styles.btn_area}>
                <a href="" className={styles.btnget}>começe agora</a>
                <p>100+ Happy Clients!</p>
              </div>
            </div>
            <div className={styles.sectionRight}></div>
          </div>
        </section>
    </header>
  )
}