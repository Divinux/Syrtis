var vHealth : int = 1;
var vMat : GameObject;

function Start()
{
	vHealth = gameObject.GetComponent(ItemStats).vHealth;
}

function Update ()
{
	if(vHealth <= 0)
	{
		Instantiate (vMat, transform.position, transform.rotation);
		Destroy(this.gameObject);
	}
}

function Damage(hitpoints : int)
{
	print("Ouch!");
	vHealth = vHealth - hitpoints;
}
