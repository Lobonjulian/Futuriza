import styles from "./styles.module.css";

const List = ({ items , className=styles.list }) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <ul key={item.id} className={styles.listItem}>
          <li>
            <a
              href={item.href}
              className={styles.listItemLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default List