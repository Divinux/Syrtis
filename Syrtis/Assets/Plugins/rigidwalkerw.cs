using UnityEngine;
using System.Collections;
 
[RequireComponent (typeof (Rigidbody))]
[RequireComponent (typeof (CapsuleCollider))]
 
public class rigidwalkerw : MonoBehaviour {
 
	public float speed = 10.0f;
	public float gravity = 10.0f;
	public float maxVelocityChange = 10.0f;
	public bool canJump = true;
	public float jumpHeight = 2.0f;
	private bool grounded = false;
 
 
 
	void Awake () {
	    //rigidbody.freezeRotation = true;

	    //rigidbody.useGravity = false;
	}
 
	void FixedUpdate () {
	    if (grounded) {
	        // Calculate how fast we should be moving
			if(rigidbody.drag != 10){
rigidbody.drag = 10;
}
 
	        // Apply a force that attempts to reach our target velocity
	        Vector3 velocity = rigidbody.velocity;
	       rigidbody.AddRelativeForce (Vector3.forward * Input.GetAxis("Vertical")*1000*speed);
			rigidbody.AddRelativeTorque(Vector3.up * Input.GetAxis("Horizontal")*700*speed);

	        // Jump
	        if (canJump && Input.GetButton("Jump")) {
	            rigidbody.velocity = new Vector3(velocity.x, CalculateJumpVerticalSpeed(), velocity.z);
	        }
	    }
		
		if(grounded == false)
		{
		if(rigidbody.drag != 0){
rigidbody.drag = 0;
}
		}
 
	    // We apply gravity manually for more tuning control
	    rigidbody.AddForce(new Vector3 (0, -gravity * rigidbody.mass, 0));
 
	    grounded = false;
	}
 
	void OnCollisionStay () {
	    grounded = true;    
	}
 
	float CalculateJumpVerticalSpeed () {
	    // From the jump height and gravity we deduce the upwards speed 
	    // for the character to reach at the apex.
	    return Mathf.Sqrt(2 * jumpHeight * gravity);
	}
}