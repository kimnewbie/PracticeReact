import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className='todo_container'>
            <div className='TodoTemplate'>
                <div className='app-title'>
                    일정 관리
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TodoTemplate;