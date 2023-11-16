const randomFolks = document.querySelector(".random-peeps");
const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    //console.log(data);
    const userResults = data.results;
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        
    };
};

