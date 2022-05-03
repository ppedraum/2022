using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Logica : MonoBehaviour
{
    private bool isActive;
    public GameObject menu;

    public void start_game()
    {
        SceneManager.LoadScene(1);
    }

    public void abrir_tela(GameObject menu)
    {
        menu.SetActive(true);
    }
    public void fechar_tela(GameObject menu)
    {
        menu.SetActive(false);
    }

    public void getKeys(GameObject banana)
    {
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            isActive = !isActive;
            menu.SetActive(isActive);
        }
    }
}
