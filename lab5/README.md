Лабораторна робота 5
Отримати навички основ реверс-інженірингу "на практиці"Створити seed генератора псевдовипадкових чисел
Використовуючи бібліотеку зовнішнього вендора, виконати наступні дії:

1. Визначити мову програмування, на якої була написана бібліотека (C/C++, C#, Deplhi, Java). Визначення мови програмування дозволить найбільш ефективно використовувати "декомпілятор". При цьому, рекомендуються наступні декомпілятори:
   o для C# - dotPeek
2. Визначити функції та їх прототипи, з яких складається динамічна бібліотека.
3. Створити додаток, що підключає дану бібліотеку та визначити, що роблять функції.
4. Декомпілювати функцію
   Текст програми
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Text;
   using System.Threading.Tasks;

namespace Neiron
{  
 public class Neuron
{
private decimal weight = 0.5m;
public decimal LastEror { get; private set; }
public decimal Smoothing { get; set; } = 0.00001m;

            public decimal ProcessInputData(decimal input)
            {
                return input * weight;
            }
            public decimal RestoreInputData(decimal output)
            {
                return output / weight;
            }
            public void Train(decimal input, decimal expectedResult)
            {
                var actualResult = input * weight;
                LastEror = expectedResult - actualResult;
                var correction = (LastEror / actualResult) * Smoothing;
                weight += correction;
            }
        }
        class Program
        {
            static void Main(string[] args)
            {
                decimal km = 100;
                decimal miles = 62.1371m;

                Neuron neuron = new Neuron();

                int i = 0;
                do
                {
                    i++;
                    neuron.Train(km, miles);
                    Console.WriteLine($"Итерация: {i}\tОшибка:\t{neuron.LastEror}");
                } while (neuron.LastEror > neuron.Smoothing || neuron.LastEror < -neuron.Smoothing);

                Console.WriteLine("Обучение завершено");

                Console.WriteLine($"{neuron.ProcessInputData(100)} миль в {100} км");

                Console.WriteLine($"{neuron.ProcessInputData(541)} миль в {541} км");

                Console.WriteLine($"{neuron.RestoreInputData(10)} км в {10} миль");
            Console.WriteLine("Lunhol Oleksandra КН-М922a");
            }
        }

}
}
