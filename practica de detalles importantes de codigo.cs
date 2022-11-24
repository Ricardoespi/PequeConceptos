using System;

namespace Name
{
    class Program
    {
        static void Main(string[] args)
        {
            Persona p1 = new Persona();
            Console.WriteLine(p1.MostrarNombre());  
        }
    }
     public class Persona
        {
            public string Nombre { get; set; }
            public string Apellido { get; set; } 
            public string MostrarNombre() => @"{Nombre} + {Apellido}";
        }
}