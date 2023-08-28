import styles from './SobreMim.module.css'
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Alan!
            </h3>
            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt='Foto de Alan Fabrício'
            />
            <p className={styles.paragrafo}>
                Olá, meu nome é Alan. Sou apaixonado por games, board games, filmes e séries. Atualmente, estou cursando Sistemas para a Internet na faculdade Anhanguera. Além disso, estou me aprofundando no desenvolvimento web front-end com ReactJS por meio de um curso livre na escola Vai na Web. Nesse curso, participo de aulas ao vivo e trabalho em projetos realistas que estão contribuindo significativamente para o meu aprendizado.
            </p>
            <p className={styles.paragrafo}>
                Além da escola, também estou ampliando meus conhecimentos na Alura, onde estudo Desenvolvimento Web com ReactJS por meio do programa ONE. Acredito que essa combinação de cursos e aprendizado prático está me proporcionando uma base sólida para minha jornada no mundo do desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Meu objetivo é me tornar um desenvolvedor web altamente qualificado e dedicado, capaz de criar experiências incríveis para os usuários. Estou entusiasmado com todas as oportunidades que essa área oferece e continuo empenhado em aprender e crescer constantemente.
            </p>
        </PostModelo>
    )
}