var userName = prompt('Please Input your Scoresaber ID (Number Only)');

fetch('https://new.scoresaber.com/api/player/' + userName + '/full').then(async Response => {
    const data = await Response.json();
    console.log(data)
    data.playerInfo.playerName;
    $("#myelement").text(data.playerInfo.playerName);
})

fetch('https://new.scoresaber.com/api/player/' + userName + '/full').then(async Response => {
        const data = await Response.json();
        data.playerInfo.rank;
        $("#rank").text(data.playerInfo.rank);
})
fetch('https://new.scoresaber.com/api/player/' + userName + '/full').then(async Response => {
        const data = await Response.json();
        data.playerInfo.countryRank;
        $("#Country").text(data.playerInfo.country);
})

fetch('https://new.scoresaber.com/api/player/' + userName + '/full').then(async Response => {
        const data = await Response.json();
        data.playerInfo.countryRank;
        $("#countryRank").text(data.playerInfo.countryRank);
})

fetch('https://new.scoresaber.com/api/player/' + userName + '/full').then(async Response => {
        const data = await Response.json();
        data.playerInfo.pp;
        $("#PP").text(data.playerInfo.pp);
})