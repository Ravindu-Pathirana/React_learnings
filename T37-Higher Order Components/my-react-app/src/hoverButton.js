import React from 'react';

const hoverButton = (WrapperButton) => {

    const FinalButton = (props) => {

        const [count, setCount] = React.useState(0);

        const hoverTrigger = () => {
            setCount(count + 1);
        }

        return (
            <>
                <WrapperButton hoverTrigger={hoverTrigger} {...props} />
                <h6>{count}</h6>
            </>
        );
    }
    return FinalButton; 
}
export default hoverButton;
