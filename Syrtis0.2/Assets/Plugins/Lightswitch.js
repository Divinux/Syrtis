var vStatus : boolean = false;

var vLights : GameObject[];

function OnHit()
{
	if(vLights.length != 0)
	{
	print("there are"+vLights.length+"lights");
	
	
		if(vStatus == false){
			for(var a = 0; a < vLights.length; a++)
			{
			print("activating number "+a);
				vLights[a].SetActive(true);
				print(a+"activated"+vLights[a]);
			}
			vStatus = true;
		}
		else if(vStatus == true){
			for(var b = 0; b < vLights.length; b++)
			{
				vLights[b].SetActive(false);
				print(b+"deactivated"+vLights[a]);
			}
			vStatus = false;
		}
	}
	else{print("there are no lights");}
}