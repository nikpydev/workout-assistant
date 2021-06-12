import { FC } from 'react';
import styles from './ListItem.module.scss';

interface ListItemProps {
  label: string;
}

const ListItem: FC<ListItemProps> = ({ label }) => {
  return <div className={styles.listItem}>{label}</div>;
};

export default ListItem;
