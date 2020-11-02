import formatDuration from 'date-fns/formatDuration'
import { ptBR } from 'date-fns/locale'

import styles from './Duration.module.css'

const MINUTES_IN_HOUR = 60;

const format = minutes => {
  const options = { format: ['hours', 'minutes'], locale: ptBR };

  return formatDuration({
    hours: Math.floor(minutes / MINUTES_IN_HOUR),
    minutes: minutes % MINUTES_IN_HOUR
  }, options)
}

const Duration = ({ minutes, align }) => (
  <span className={`${styles["time-wrapper"]} ${styles[`time-wrapper--${align}`]}`}>
    <span className={styles.time}>{format(minutes)}</span>
  </span>
)

export default Duration
