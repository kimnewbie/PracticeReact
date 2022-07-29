import styles from './CSSModule.module.scss'// rsc
import classNames from 'classnames/bind'; // yarn add classnames

const MyComponent = ({ hightlighted, theme }) => {
    classNames('one', 'two'); // 'one two'
    classNames('one', { two: true }); // 'one two'
    classNames('one', { two: false }); // 'one'
    classNames('one', ['two', 'three']); // 'one two three'

    const myClass = 'hello';
    classNames('one', myClass, { myCondition: true }); // = 'one hello myCondition'

    return (
        <>
            <div className={`MyComponent ${theme} ${hightlighted ? 'hightlited' : ''}`}>Complicated</div>
            <div className={classNames('MyComponent', { hightlighted }, theme)}>Simple</div>
        </>
    )
}

const CssModule = () => {
    const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

    return (
        <>
            {/* <div className={styles.wrapper}> */}
            {/* <div className={`${styles.wrapper} ${styles.inverted}`}> */}
            {/* <div className={[styles.wrapper, styles.inverted].join(' ')}> */}
            <div className={cx('wrapper', 'inverted')}>
                안녕하세요, 저는 < span className='something' > CSS Module!</span >
            </div >
            <br />
            <MyComponent />
        </>
    );
};

export default CssModule;