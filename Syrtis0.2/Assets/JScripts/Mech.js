//The mech object. 
private var vMech : GameObject;
vMech = gameObject;
//The part of the mech that carries the cabin and rotates on the X axis
var vMechRoot : GameObject;
//The cabin of the mech that rotates on the y axis
var vMechCorpse : GameObject;
//The mechs rigidwalker
private var sRigid : rigidwalkerw;
sRigid = vMech.GetComponent(rigidwalkerw);


//the player object
private var vPlayer : GameObject;
vPlayer = GameObject.FindWithTag("Player");
//the players rigidwalker
private var vRigid : rigidwalker;
vRigid = vPlayer.GetComponent(rigidwalker);
//the players maincamera
private var vCam : GameObject;
vCam = vPlayer.FindWithTag("MainCamera");




//the main switch
var vSwitchMain : GameObject;
//the walker switch
var vSwitchWalker : GameObject;
//the leg pneumatics switch
var vSwitchLegs : GameObject;
//the switch for body rotation
var vSwitchRotation : GameObject;
//the mechs main status
var vMainStatus : boolean = false;
//the mechs control lock status
var vLocked : boolean = false;

//set animation status to 0 : off mode
var vAnimState : int = 0;
var vAnim : Animation;
vAnim = GetComponentInChildren(Animation);





function Start () 
{
	//set the rigidwalke to disabled initially
	sRigid.enabled = vMainStatus;
}

function Update () 
{
	//check for mouse2
	if(Input.GetButtonUp("Fire2"))
	{
		if(vLocked == true)
		{
			vLocked = false;
			vMechRoot.transform.localEulerAngles.x = 0;
			vMechCorpse.transform.localEulerAngles.y = 0;
		}
	}
	StatusCheck();
	RotationCheck();
	Anim();
	
}

function LateUpdate()
{
	if(vLocked == true && vSwitchMain.GetComponentInChildren(Flipswitch).vState == true)
	{
		vPlayer.transform.localEulerAngles.y = 0;
		vCam.transform.localEulerAngles.x = 0;
	}
}

//this function performs checks on flipswitches to see if any function need to be enabled/disabled
function StatusCheck()
{
	//if the main switch is disabled
	if(vSwitchMain.GetComponentInChildren(Flipswitch).vState == false)
	{
		//check if the mech is enabled
		if(vMainStatus == true)
		{
			//if it is, disable it and its walker
			vMainStatus = false;
			sRigid.enabled = vMainStatus;
			vAnim.Stop();
			//play animation shutdown
		}
		
	}
	else //if mainswitch is  enabled
	{
		//check if the mech is disabled
		if(vMainStatus == false)
		{
			//if it is, enable the mech
			vMainStatus = true;
			//play boot anmation
		}
	}
	
	//check to see if the legs are activated
	if(vMainStatus == true)
	{
		if(vSwitchLegs.GetComponentInChildren(Flipswitch).vState == true)
		{
			if(vAnimState == 0)
			{
				vAnim.CrossFade("MechBoot");
				vAnim.CrossFadeQueued("MechIdle");
				//set animstate to 1: booted and standing up
				yield WaitForSeconds(2);
				vAnimState = 1;
				print("Booting");
			}
		}
		else
		{
			if(vAnimState != 0)
			{
				vAnim.CrossFade("MechShutdown");
				//set animate to 0: off mode
				vAnimState = 0;
				print("shutting down");
			}
		}
	}
	
	
	//do the same check for the walker switch
	if(vMainStatus == true)
	{
		if(vSwitchLegs.GetComponentInChildren(Flipswitch).vState == true)
		{
			if(vSwitchWalker.GetComponentInChildren(Flipswitch).vState == true)
			{
				if(sRigid.enabled == false)
				{
					sRigid.enabled = true;
				}
			}
			else
			{
				if(sRigid.enabled == true)
				{
					sRigid.enabled = false;
				}
			}
		}
	}
}

function RotationCheck()
{
	if(vMainStatus == true)
	{
		if(vSwitchRotation.GetComponentInChildren(Flipswitch).vState == true)
		{
			if(vLocked == true)
			{
				if(vMechRoot.GetComponent(MouseLook).enabled == true)
				{
					return;
				}
				else
				{
					
					
					vMechRoot.GetComponent(MouseLook).enabled = true;
					vMechCorpse.GetComponent(MouseLook).enabled = true;
					
					vPlayer.GetComponent(MouseLook).enabled = false;
					vCam.GetComponent(MouseLook).enabled = false;
				}
				vPlayer.transform.localEulerAngles.y = 0;
				vPlayer.transform.localEulerAngles.x = 0;
				vCam.transform.localEulerAngles.x = 0;
			}
			
			if(vLocked == false)
			{
				if(vMechRoot.GetComponent(MouseLook).enabled == false)
				{
					return;
				}
				else
				{
					vMechRoot.GetComponent(MouseLook).enabled = false;
					vMechCorpse.GetComponent(MouseLook).enabled = false;
					
					vPlayer.GetComponent(MouseLook).enabled = true;
					vCam.GetComponent(MouseLook).enabled = true;
				}
				vPlayer.transform.localEulerAngles.y = 0;
				vPlayer.transform.localEulerAngles.x = 0;
				vCam.transform.localEulerAngles.x = 0;
			}
		}
	}
}

function Anim()
{
	if(vMainStatus == true)
	{
		if(vSwitchLegs.GetComponentInChildren(Flipswitch).vState == true)
		{	
			if(vAnimState == 1) 
			{
				if(Input.GetAxis("Vertical") == 0)
				{
					vAnim.CrossFade("MechIdle");
				}
				
				if(Input.GetAxis("Vertical") != 0)
				{
				if(vSwitchWalker.GetComponentInChildren(Flipswitch).vState == true){
					vAnim.CrossFade("MechWalk");
				}}
			}
		}
	}
}