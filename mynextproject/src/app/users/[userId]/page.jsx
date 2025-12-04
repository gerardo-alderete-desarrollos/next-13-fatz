"use client"

import { useParams } from "next/navigation";

function User() {
    const params = useParams();

    console.log(params);
    
    return (
        <div>
            <div>User</div>

            <button onClick={() => {
                console.log('works');
            }}>
                Click
            </button>
        </div>
    )
}

export default User;