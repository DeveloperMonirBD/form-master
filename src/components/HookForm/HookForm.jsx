import useInputState from "../hooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Monir')
    const nameState = useInputState('Monir')
    const [emailState] = useInputState('Monir@gmail.com')
    console.log(emailState)


    const handleSubmit = e => {
        // console.log('Form data', name)
        console.log('Form data', emailState)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}

                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;