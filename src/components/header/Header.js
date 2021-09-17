import React from 'react';

const Header = () => {
    const date = new Date();
    let months = ["January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <header>
            <div className='container'>
                <h1 className='header__title'>TODO</h1>
                <div className='header__data'>
                    <div className='header__left'>
                        <h2 className='header__date'>{date.getDate()}</h2>
                        <div>
                            <h4 className='header__month'>{months[date.getMonth()]}</h4>
                            <p className='header__year'>{date.getFullYear()}</p>
                        </div>
                    </div>

                    <p className='header__day'>{days[date.getDay() - 1]}</p>
                </div>
            </div>
        </header>

    );
};

export default Header;