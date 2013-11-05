//player object
var vPlayer : GameObject;
vPlayer = gameObject.FindWithTag("Player");

//inventory
var vInv : Component;
vInv = vPlayer.GetComponent(InventoryBySnake);

//the front part of the book
var vFront : GameObject;
//the inside of the book
var vIns : GameObject[];
//array for the page pictures
var vPages : Texture2D[];

//page counter
var vPage : int = 0;
//the skill this book unlocks
var vSkill : int;


function Update () 
{
	//check for mouse input outside of menu
	if(Input.GetMouseButtonDown(0) && vInv.isinoptions == -1 && vInv.vMenuState == 0)
	{	
		//check if there is a next page
		if(vPage + 1 <= vPages.length){
			vPage++;
		}
		else 
		{
			//if not, close book
			vPage = 0;
			//add skill
			vPlayer.GetComponent(StatSkill).vSkills[vSkill].vEnabled = true;
			//add Exp
			vPlayer.GetComponent(StatSkill).GainExp(5,1);
		}
		//check if the book needs to be opened and rotate the front
		if(vPage != 0)
		{
			vFront.transform.localEulerAngles.y = 160;
		}
		else
		{
			vFront.transform.localEulerAngles.y = 0;
		}
		
		fMat();
	}
	

}

function fMat()
{
	if(vPage != 0){
		vIns[0].renderer.material.mainTexture = vPages[vPage - 1];
		vIns[1].renderer.material.mainTexture = vPages[vPage - 1];
	}
}