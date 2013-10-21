var vHealth : double = 1;



function Update ()
{
	if(vHealth <= 0)
	{
		Destroy(this.gameObject);
	}
}

function Damage(hitpoints : int)
{
	vHealth = vHealth - hitpoints;
}
