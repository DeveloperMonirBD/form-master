import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Fahmid'} />
                <Cousin name={'Najifa'} />
            </section>
        </div>
    );
};

export default Aunty;