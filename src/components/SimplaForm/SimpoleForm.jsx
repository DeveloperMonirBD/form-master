

const SimpoleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const data = e.target.name.value
        const email = e.target.email.value
        console.log(data, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id=""/>
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpoleForm;