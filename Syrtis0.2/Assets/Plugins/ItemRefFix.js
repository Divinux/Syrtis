var foos:GameObject;

 

function Awake(){

Instantiate(foos,transform.position,transform.rotation);

Destroy(gameObject);

}