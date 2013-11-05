class Stat
{
	var vStatName : String;
	var vValue : float;
	var vLvl : int;
	var vExp : float;
	var vDesc : String;
}

class Skill
{
	var vSkillName : String;
	var vEnabled : boolean = false;
}

var vStats : Stat[];
var vSkills : Skill[];

function Awake()
{
	//initializing stats
	
	vStats[0].vStatName = "Alive for: ";
	vStats[0].vValue = 0;
	vStats[0].vLvl = 1;
	vStats[0].vExp = 30;
	vStats[0].vDesc = "Amount of hours lived. Influences maximum HP.";
	
	vStats[1].vStatName = "Meals eaten: ";
	vStats[1].vValue = 0;
	vStats[1].vLvl = 1;
	vStats[1].vExp = 30;
	vStats[1].vDesc = "Number of meals consumed. Drinks count as meals. Influences amount of hunger points restored.";
	
	vStats[2].vStatName = "Times rested: ";
	vStats[2].vValue = 0;
	vStats[2].vLvl = 1;
	vStats[2].vExp = 30;
	vStats[2].vDesc = "Times slept or sat on a chair for some time. Influences the speed of energy recovery.";
	
	vStats[3].vStatName = "Bullets shot: ";
	vStats[3].vValue = 0;
	vStats[3].vLvl = 1;
	vStats[3].vExp = 30;
	vStats[3].vDesc = "Amount of bullets shot. Influences weapon accuracy.";
	
	//value between 0 and 3, the higher the better the aim
	vStats[4].vStatName = "Accuracy: ";
	vStats[4].vValue = 0;
	vStats[4].vLvl = 1;
	vStats[4].vExp = 30;
	vStats[4].vDesc = "";
	
	vStats[5].vStatName = "Books read: ";
	vStats[5].vValue = 0;
	vStats[5].vLvl = 1;
	vStats[5].vExp = 30;
	vStats[5].vDesc = "Amount of new books read. Influences crafting skill.";
	
	vStats[6].vStatName = "Items crafted: ";
	vStats[6].vValue = 0;
	vStats[6].vLvl = 1;
	vStats[6].vExp = 30;
	vStats[6].vDesc = "Amount of new items created or combined. Influences crafting skill.";

	//initializing skills
	
	vSkills[0].vSkillName = "Guns: ";
	vSkills[0].vEnabled = false;
	
	vSkills[1].vSkillName = "Driving: ";
	vSkills[1].vEnabled = false;
	
	vSkills[2].vSkillName = "Crafting: ";
	vSkills[2].vEnabled = false;
	
	
	
	
}

function GainExp (vIndex : int, vExpr : float) 
{
	//increase the counter
	vStats[vIndex].vValue++;
	
	//sub from experience needed to lvl up
	vStats[vIndex].vExp -= vExpr;
	
	//if exp to next lvl reaches zero
	if(vStats[vIndex].vExp <= 0)
	{
	//increase lvl
	vStats[vIndex].vLvl++;
	//set experience to new amount
	vStats[vIndex].vExp = vStats[vIndex].vLvl * 30;
	}
	
	//special case gunshot
	if(vIndex == 3)
	{
		vAcc();
	}
}

function vAcc()
{
	vStats[4].vValue = vStats[4].vValue + 0.025;
	if(vStats[4].vValue >= 3)
	{
	vStats[4].vValue = 3;
	}
}