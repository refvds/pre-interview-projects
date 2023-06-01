const URL = ' https://api.github.com/users';

export const getUserInfo = async(username) => {
    const fetches = [fetch(`${URL}/${username}`),fetch(`${URL}/${username}/repos`)];
    const [user, repos] = await Promise.allSettled(fetches);
    const usersData = await user.value.json();
    const reposData = await repos.value.json();
    return {
        user: usersData,
        repos: reposData
    }
}