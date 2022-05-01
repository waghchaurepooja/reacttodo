
export const TodoItem = ({ Item, StatusFn, index}) =>{
    
    console.log('Item:', Item)

    const handleChange = (event) =>{
        
        // console.log('event:', event)
        // console.log('event:', event.target)
        console.log('event:', event.target.value)
        console.log('event:', event.target.checked)
        StatusFn(event.target.value,index);

    }
    var status = Item.status;
    console.log('statusItem:', status)
    if(status)
    {

        return null;

    }

    return (
        
        <div className="NotDoneItemContainer">
            <div className="NotDoneItemBox">
                <input className="NotDoneChecbox" onChange={handleChange} name = "CheckboxForDone" type="checkbox" value = {Item.id}/>
                <label className="NotDoneItem" htmlFor="">{Item.title}</label>
            </div>
        </div>
    )
}