async function getUser(id) {
    const res = await fetch('https://reqres.in/api/users/' + id, {
        headers: {
            'x-api-key': 'reqres_270bac37ec3e4f839f3428fe12500094' // required on all endpoints
        }
    })
    const data = await res.json();
    console.log(data);
    return data.data;
}

export default async function UserPage({ params }) {
    const user = await getUser(params.id);
    return <div className="bg-red-300 p-10 rounded-md">
        <img src={user.avatar} alt="" className="m-auto my-4"/>
        <h3 className="text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
        <p>email: {user.email}</p>
    </div>
}