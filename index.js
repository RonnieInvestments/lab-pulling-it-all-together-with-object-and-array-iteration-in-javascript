function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Retrieving player information
/* This function takes the player's name as an argument and
 returns the number of points scored by that player in the game.*/
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
    return 0; // Return 0 if player not found
}

module.exports = { gameObject, numPointsScored };

function shoeSize(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
    return 0; // Return 0 if player not found
}
/* This function takes the team name as an argument and
 returns an array of that team's colors.*/

function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return []; // Return empty array if team not found
}

module.exports = { gameObject, numPointsScored, shoeSize, teamColors };

// Function to retrieve team names
function teamNames() {
    const game = gameObject();
    const name = [];
    Object.values(game).forEach(team => {
        name.push(team.teamName);
    }); 
    return name;
}

// Function to return player numbers for a given team
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            for (const player of Object.values(team.players)) {
                numbers.push(player.number);
            }
        }
    }
    return numbers;
}

module.exports = { gameObject, numPointsScored, shoeSize, teamColors, teamNames, playerNumbers };

// Function to retrieve player stats
function playerStats(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return {}; // Return empty object if player not found
}

module.exports = { gameObject, numPointsScored, shoeSize, 
    teamColors, teamNames, playerNumbers, playerStats };

// Function to find rebounds of player with largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team of Object.values(game)) {
        for (const [playerName, stats] of Object.entries(team.players)) {
            if (stats.shoe > largestShoeSize) {
                largestShoeSize = stats.shoe;
                rebounds = stats.rebounds;
            }
        }
    }
    return rebounds;
}

module.exports = { gameObject, numPointsScored, shoeSize, teamColors, 
    teamNames, playerNumbers, playerStats, bigShoeRebounds };