// // Student Grades
// // Easy

// // Time Limit: 2 sec
// // Memory Limit: 128000 kB
// // Problem Statement
// // Given marks of a student in 5 subjects(any). You need to find the grade he/she would get on the basis of percentage obtained. Grades computed are as follows:

// // If the percentage of marks is >= 80 then print Grade ‘A’
// // If the percentage is <80 and >=60 then print Grade ‘B’
// // If the percentage is <60 and >=40 then print Grade ‘C’
// // else prins Grade ‘D’
// // Input
// // The input contains 5 integers separated by spaces.

// // Constraints:
// // 1 <= marks <= 100
// // Output
// // You need to print the grade obtained by him/her.
// // Example
// // Sample Input:
// // 75 70 80 90 100

// // Sample Output:
// // A

// import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// // don't change the name of this class
// // you can add inner classes if needed
// class Main {
//     public static void main (String[] args) {
//                       // Your code here
//                       Scanner sc = new Scanner(System.in);
//                       int a = Integer.parseInt(sc.next());
//                       int b = Integer.parseInt(sc.next());
//                       int c = Integer.parseInt(sc.next());
//                       int d = Integer.parseInt(sc.next());
//                       int e = Integer.parseInt(sc.next());
//                       int percentage = ((a+b+c+d+e)/5);
//                       if(percentage > 79) {
//                           System.out.print("A");
//                       } else if(percentage < 80 && percentage > 59) {
//                           System.out.print("B");
//                       } else if(percentage < 60 && percentage > 39) {
//                           System.out.print("C");
//                       } else {
//                           System.out.print("D");
//                       }
//     }
// }