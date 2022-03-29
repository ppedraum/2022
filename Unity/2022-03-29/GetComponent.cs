using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetComponent : MonoBehaviour
{
    private BoxCollider boxc;
    private Rigidbody ribd;
    void Start()
    {
        boxc = GetComponent<BoxCollider>();
        ribd = GetComponent<Rigidbody>();
    }


    void Update()
    {
        
    }
}
