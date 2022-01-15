import styles from "./Checkbox.module.css";

import { useStorage } from "../../lib/contexts/StorageContext";

const Checkbox = ({ url }) => {
  const [urls, setUrl] = useStorage();

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={url}
        name={url}
        checked={urls.includes(url)}
        onChange={({ target: { checked } }) => setUrl({ url, checked })}
      />
      <label htmlFor={url}></label>
    </div>
  );
};
export default Checkbox;
