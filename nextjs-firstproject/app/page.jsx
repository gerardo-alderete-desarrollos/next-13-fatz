import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres_270bac37ec3e4f839f3428fe12500094' // required on all endpoints
    }
  })
  const data = await res.json();
  console.log('data', data.data);
  return data.data;
}
async function HomePage() {
  const users = await fetchUsers();

  return (
    <Users users={users}/>
  )
}

export default HomePage