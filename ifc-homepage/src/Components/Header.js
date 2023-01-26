import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_box}>
                <a className={styles.ifc_logo} href="/">IFC 열방교회</a>
                <div className={styles.menu_btn}>
                    <a href="/introduce">교회 소개</a>
                    <a href="/sketchMap">오시는 길</a>
                    <a href="/calendar">교회 일정</a>
                </div>
            </div>
        </div>
    );
}

export default Header;