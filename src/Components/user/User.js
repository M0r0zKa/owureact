
function User({userButton, item,user}) {


    return (

        <div>
            <h2>{item.name} {item.username}</h2>
            <p>{item.id}</p>
            <button onClick={()=>userButton(item)}>User Detalis</button>

        </div>
    );
}

export {User};