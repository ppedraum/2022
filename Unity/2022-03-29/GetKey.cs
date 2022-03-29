using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetKey : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            Debug.Log("A tecla A foi apertada");
        }else if (Input.GetKeyUp(KeyCode.A))
        {
            Debug.Log("A tecla A foi solta");
        }

        OnMouseButon();
    }

    private void OnMouseButon() => Debug.Log("Clicou");
}

