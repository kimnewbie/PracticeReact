import styles from './CSSModule.module.css'// rsc

const CssModule = () => {
    return (
        // <div className={styles.wrapper}>
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        <div className={[styles.wrapper, styles.inverted].join(' ')}>
            안녕하세요, 저는 < span className='something' > CSS Module!</span >
        </div >
    );
};

export default CssModule;