var vSound : AudioSource;
var vC : AudioClip;

var vSoundPref : GameObject;
var vSource : GameObject;


//base is 1.05946
var vBase : float;
var vExponent : float;
var vFactor : float;

vFactor = Mathf.Pow(vBase, vExponent);


function OnHit () 
{

	vSource = Instantiate(vSoundPref, transform.position, transform.rotation);
	vSound = vSource.GetComponent(AudioSource);
	vSound.clip = vC;
 
	vSound.pitch = vFactor;
	vSound.Play();
	
	press();
}

function press()
{
	transform.localEulerAngles.x = 3;
	yield WaitForSeconds(0.2);
	transform.localEulerAngles.x = 0;
}


