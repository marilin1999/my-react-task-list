const task = ({ descripcion, realizado }) => {
    return(
        <div style={{
            border: 'solid red', 
            displey:'flex', 
            alignItems: 'center', 
            gap: '5px', 
            padding: '10px', 
            justifyContent: 'space-between'}}
            >
         {descripcion}
        <p>{realizado}</p>
        <button>borrar</button>
        </div>
    );
};

export default task; 