import {useEffect, useState} from "react";
import {User} from "../user/User";
import {UserDetalis} from "../userDetalis/UserDetalis";

export function Users() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(value => {
                setUsers(value)
            });
    }, []);
    const userButton = (item) => {
        setUser(item)
    }

    return (
        <div>
            {
                user && <UserDetalis
                user={user}
                />
            }
            {
                users.map(value => <User key={value.id}
                                         item={value}
                                         userButton={userButton}
                />)



            }
        </div>
    );
}

