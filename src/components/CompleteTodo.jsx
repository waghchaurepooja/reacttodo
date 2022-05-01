
export const CompleteTodo = ({Item, index, DeleteFn}) =>{
    
    console.log('Item:', Item)

    const handleChange = (id) =>{
        console.log('id:', id)
        //console.log('event:', event)
        //console.log('event:', event.target)
        console.log('event:', id.target.name)
        //console.log('event:', event.target.checked);
        DeleteFn(id.target.name);
        
    }
    if(!Item.status)
    {

        return null;

    }
    return (

        <div className="DoneItemContainer">
            <div className="DoneItemBox">
                <input className="DoneItemCheckboxBox" name = "CheckboxForDone" type="checkbox" value = {Item.id} checked/>
                <label className="DoneItemCheckbox" htmlFor="">{Item.title}</label>
                <button className="DeleteButton" name={Item.id} onClick={(event) =>{
                    handleChange(event)
                }}>Delete</button>
            </div>
        </div>
        
    )
}