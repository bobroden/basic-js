module.exports = function createDreamTeam(members) {
	var team = [];
	if(Object.prototype.toString.call(members) != '[object Array]')
		return false;
	for(var i = 0; i < members.length; i++)
		if(typeof(members[i]) == "string")
			if(members[i][0] != " ")
				team.push(members[i][0].toUpperCase())
			else
				for(var j = 0; j < members[i].length; j++)
					if(members[i][j] != " ") {
						team.push(members[i][j].toUpperCase())
						break;
					}
	return team.sort().join("");
};