import styles from './Checkbox.module.css'

import useLocalStorage from '../../hooks/useLocalStorage'

const Checkbox = ({ url }) => {
  const [urls, setUrl] = useLocalStorage('ngStorage-done', []);

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={url}
        name={url}
        checked={urls.includes(url)}
        onChange={({ target: { checked } }) => setUrl({ url, checked })}
      />
      <label htmlFor={url} ></label>
    </div>
  )
}
export default Checkbox
