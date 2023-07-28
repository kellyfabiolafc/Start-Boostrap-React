import { Title } from '../Title';
import { Container } from '../Container';
import { IconStart } from '../IconStarts';

import cabin from '../../assets/images/cabin.png';
import cake from '../../assets/images/cake.png';
import circus from '../../assets/images/circus.png';
import game from '../../assets/images/game.png';
import safe from '../../assets/images/safe.png';
import submarine from '../../assets/images/submarine.png';
import style from '../../css-modules/SectionPortfolio.module.css';

export const SectionPortfolio = ({ id }) => {
    return (
        <div id={id} className={style['section-portfolio__background']}>
            <Container>
                <section className={style['section-portfolio']}>
                    <Title className={style['section-contact__title']}>
                        PORTFOLIO
                    </Title>
                    <IconStart
                        color={'black'}
                        className={'start-icon__black'}
                    />
                    <div className={style['section-portfolio__images']}>
                        <img src={cabin} alt='Imagen de una cabaña' />
                        <img src={cake} alt='Imagen de un pastel' />
                        <img src={circus} alt='Imagen de un circo' />
                        <img src={game} alt='Imagen de un videojuego' />
                        <img src={safe} alt='Imagen de un lugar seguro' />
                        <img src={submarine} alt='Imagen de un submarino' />
                    </div>
                </section>
            </Container>
        </div>
    );
};
