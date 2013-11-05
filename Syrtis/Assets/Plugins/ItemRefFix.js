var foos : GameObject;
var foosref : GameObject;

var vHealth : int = 1;
var vSize : int = 1;
var vSpeed : int = 1;
var vPower : int = 1;


function Awake(){

	foosref = Instantiate(foos,transform.position,transform.rotation);
	foosref.GetComponent(ItemStats).vHealth = vHealth;
	foosref.GetComponent(ItemStats).vSize = vSize;
	foosref.GetComponent(ItemStats).vSpeed = vSpeed;
	foosref.GetComponent(ItemStats).vPower = vPower;

	Destroy(gameObject);

}