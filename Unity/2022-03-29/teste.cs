using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class teste : MonoBehaviour
{

    public class Inimigo
    {
        private string nome;
        private int dano, velocidade;
        public Inimigo(string nome, int dano, int velocidade)
        {
            this.nome = nome;
            this.dano = dano;
            this.velocidade = velocidade;
            
        }
        public void Atacar(Player player)
        {

        }
    }

    public class Player
    {

    }

    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
