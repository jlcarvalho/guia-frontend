import styles from './Section.module.css'

import Checkbox from '../Checkbox/Checkbox';
import Duration from '../Duration/Duration';

const Section = ({ name, links, align }) => (
  <>
    <h2>{name}</h2>
    <ul className={styles.timeline}>
      {links.map(resource => (
        <li key={resource.url}>
          <div className={styles[`direction-${align}`]}>
            <div className={styles['flag-wrapper']}>
              <div className={styles.flag}>
                <Checkbox {...resource} />
                <a className={styles.title} href={resource.url} title={resource.name} target="_blank">{resource.name}</a>
              </div>
              <Duration minutes={resource.duration} align={align} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </>
)

export default Section;
