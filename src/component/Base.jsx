export const Base = () => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Curst'];
    return (
        <div className="base container">
            <h3>Step 1: Choose your Base</h3>
            <ul>
                {
                    bases.map((base) => {
                        let spanClass = pizza.base === base ? 'active' : '';
                        return <li key={index}>
                            <span className={spanClass}>
                                {base}
                            </span>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}