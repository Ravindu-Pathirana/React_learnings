import React from 'react';

const clickButton = (WrapperButton) => {

    const FinalButton = (props) => {

        const [count, setCount] = React.useState(0);

        const clickTrigger = () => {
            setCount(count + 1);
        }

        return (
            <>
                <WrapperButton clickTrigger={clickTrigger} count={count} {...props} />
                <h6>{count}</h6>
            </>
        );
    }
    return FinalButton; 
}
export default clickButton;