var vMuzzle : GameObject;

var vCam : Camera;
var vDir : Vector3;
var hHit : RaycastHit;
var vHitObj : Transform;
var other : GameObject;
var vCamObj : GameObject;
var vPool : GameObject;

var vAmmo : int;
var vAmmoMax : int;
var vAmmoRef : GameObject = null;

var vRnd : float;
var vRndPlComponent : double;

var vShotSound : AudioClip;
var vNoShotSound : AudioClip;



function Start ()
{
	//Gameobject finds all needed Objects automatically
	other =  GameObject.FindWithTag ("Player");
	vCam = other.GetComponentInChildren(Camera);
	vPool = GameObject.FindWithTag("BulletPool");
	vCamObj = other.FindWithTag("MainCamera");
	
	//Pulls the clipsize from the itemstats and sets clipsize
	vAmmo = GetComponent(ItemStats).vSize;
	vAmmoMax = vAmmo;
}

//waits for player input and triggers an action
function Update ()
{
	//checks if game is paused or any menus open
	if(Input.GetMouseButtonDown(0) && other.GetComponent(InventoryBySnake).isinoptions == -1)
	{
		if(other.GetComponent(InventoryBySnake).vMenuState == 0)
		{
			Shoot();
		}
	}
	
	
	if (Input.GetButtonUp ("Reload"))
	{
		Reload();
	}
}

//checks if gun is loaded and shoots or doesnt
function Shoot()
{
	if(vAmmo > 0)
	{
		//A shot is fired
		Fire();
	}
	else
	{
		//No shot is fired
		Noshot();
	}
}

//the actual shot function
function Fire()
{
	//pulls idrection for raycast
	vDir = vCam.transform.forward;
	
	//adds spray according to player accuracy
	random();
	vDir.x = vDir.x + vRnd;
	random();
	vDir.y = vDir.y + vRnd;
	random();
	vDir.z = vDir.z + vRnd;
	
	//raycasts and tells hit object that it was hit
	if (Physics.Raycast(vCam.transform.position, vDir, hHit, 1000))
	{
		vHitObj = hHit.transform.root;
		vHitObj.SendMessage ("Damage", transform.GetComponent(ItemStats).vPower);
		//print("Hit");
		
		//moves a bullethole from the pool to the hitposition
		vPool.GetComponent(Pool).Spawn(hHit);
	}
	
	vAmmo--;
	if(vAmmo < 0)
	{
		vAmmo = 0;
	}
	
	//audio response
	audio.Stop();
	audio.clip = vShotSound;
	audio.Play();
	
	//momentum after shot
	print("prepare for momentum");
	momentum();
	
	print("Momentum done");
	
	other.GetComponent(StatSkill).GainExp(3,1);
	//print("Pew pew");
}

//the actual no shot function
function Noshot()
{
	//audio response
	audio.Stop();
	audio.clip = vNoShotSound;
	audio.Play();
	
	//print("No shot fired");
}

//the actual reload function
function Reload()
{
	//pulls the size of the inventory
	var m = other.GetComponent(InventoryBySnake).itemnamen.length;
	
	//checks if an ammo item is in any of the slots
	for(var n = 0; n < m+1; n++)
	{
		if(n < m)
		{
			Debug.Log("n is now: " + n);
			if (other.GetComponent(ActiveItem).vActiveObj[n].CompareTag("Ammo"))
			{
				print("Found");
				
				audio.Stop();
				audio.clip = vNoShotSound;
				audio.Play();
				
				vAmmoRef = other.GetComponent(ActiveItem).vActiveObj[n];
				
				var need = vAmmoMax - vAmmo;
				if(vAmmoRef.GetComponent(Ammo).vCurrent >= need)
				{
					//replentishes ammo fully
					vAmmoRef.GetComponent(Ammo).vCurrent = vAmmoRef.GetComponent(Ammo).vCurrent - need;
					vAmmo = vAmmoMax;
				}
				else
				{
					//replentishes only as much as needed. for when the player reloads without having shot the entire clip
					vAmmo = vAmmoRef.GetComponent(Ammo).vCurrent;
					vAmmoRef.GetComponent(Ammo).vCurrent = 0;
					
				}
			}
		}
		
	}
}

//generates a random number between -,5 and +,5 and multiplies with player accuracy
function random ()
{

	vRnd = Random.value - 0.5;
	if(GetComponent(ItemStats).vHealth >= 10)
	{
		vRnd = vRnd * 0.7;
	}
	if(GetComponent(ItemStats).vHealth >= 100)
	{
		vRnd = vRnd * 0.5;
	}
	var abc = 3 - other.GetComponent(StatSkill).vStats[4].vValue;
	vRnd = vRnd* 0.1 * abc;
	
	if(other.GetComponent(StatSkill).vStats[4].vValue == 3)
	{
		vRnd = 0.0001;
	}
}

function momentum()
{

	print("before wait");

	vCamObj.GetComponent(MouseLook).carplug = 6;
	vMuzzle.SetActive(true);

	yield WaitForSeconds(.02);
	
	vCamObj.GetComponent(MouseLook).carplug = 0;
	vMuzzle.SetActive(false);
	
	print("after wait");
}