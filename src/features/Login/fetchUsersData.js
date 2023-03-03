export default async function fetchUsersData(url, dispatch, SET_USERS_DATA) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Received ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    dispatch({ type: SET_USERS_DATA, payload: data });
  } catch (e) {
    throw new Error(`Failed to fetch users data ${e}`);
  }
}
