import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> Olá </h1>
                <p className={styles.paragrafo}>
                    Eu sou Alan Fabrício, estudante de programação e um futuro Dev.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden="true"
                    alt='Imagem de um circulo colorido'
                    />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    aria-hidden="true"
                    alt='Foto Alan Fabrício'
                    />
            </div>
        </div>
    )
}