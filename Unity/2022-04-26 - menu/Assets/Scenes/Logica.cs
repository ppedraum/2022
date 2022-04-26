using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Logica : MonoBehaviour
{
    public void start_game()
    {
        SceneManager.LoadScene(1);
    }
    public void start_menu(GameObject menu)
    {
        menu.SetActive(true);
    }
    public void exit_menu(GameObject menu)
    {
        menu.SetActive(false);
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
