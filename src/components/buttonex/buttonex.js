const ButtonEx = () => {

    const Jay = () => {
        alert("Hi I am Jay...");
    }

    const Noah = () => {
        alert("Hi I am Noah...");
    }

    const sandy = () => {
        alert("Hi I am Sandy...")
    }
    return(
        <div>
            <input type="button" value="Jay" onClick={Jay} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Noah" onClick={Noah} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Sandy" onClick={sandy} />
        </div>
    )
}

export default ButtonEx;