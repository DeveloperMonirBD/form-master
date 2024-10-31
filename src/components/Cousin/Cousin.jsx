import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousin = ({ name }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {name === 'Mithila' && <p>has: {gift}</p>}
        </div>
    );
};

export default Cousin;