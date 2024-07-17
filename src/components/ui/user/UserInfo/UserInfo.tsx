import styles from "./UserInfo.module.scss";
import { FC } from "react";
import { ReactComponent as TelIcon } from "assets/svg/telephone.svg";
import { ReactComponent as EmailIcon } from "assets/svg/email.svg";
import { IUser } from "models/our-team.model";

interface UserInfoProps {
	user: IUser;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
	return (
		<section className={styles.userInfo}>
			<p className={styles.text}>
				Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
				продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
				ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
				процессы за счет применения новейших технологий и увеличивать продажи, используя самые
				современные аналитические инструменты.
				<br />
				<br />
				В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
				трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных
				моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень
				компетентности, уверенность в том, что после окончания проекта у клиента есть все
				необходимое, чтобы дальше развиваться самостоятельно".
				<br />
				<br />
				Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
				предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины
				в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других
				бизнес-проектов.
			</p>

			<div className={styles.contacts}>
				<div className={styles.contact}>
					<TelIcon />
					<a href="tel:+79543334455">+7 (954) 333-44-55</a>
				</div>
				<div className={styles.contact}>
					<EmailIcon />
					<a
						className={styles.email}
						href={`mailto:${user.email}`}
					>
						{user.email}
					</a>
				</div>
			</div>
		</section>
	);
};

export default UserInfo;
