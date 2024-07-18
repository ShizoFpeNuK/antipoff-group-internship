import styles from "./MainLoader.module.scss";
import { FC } from "react";

interface MainLoaderProps {
  size?: number | string;
}

const MainLoader: FC<MainLoaderProps> = ({size}) => {
	return (
		<div id="main-loader" className={styles.wrapperLoader}>
			<div className={styles.loader} style={{width: size, height: size}}/>
		</div>
	);
};

export default MainLoader;
