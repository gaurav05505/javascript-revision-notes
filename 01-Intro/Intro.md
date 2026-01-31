# Why js ?
----> lets assume that we have a clint and server so if you want to open any website thr clint side send request to server 
and server send  3 files => HTML , CSS , and js.. 

js --> to make website dynamic , to add intractivity.

## Point --> 
1. website only understand js not other lang. 

## prof --> 
Step1 => go to web page or open any browser and go to inspect and console.
Step2 => Run any js sntax it will run but run lang another than js it will give error. 

## But what is the need of js in first place like there are many lang exist like c++ , java then why js? 
1. js introduce in 1995 and on that time c++ and js and more lang exist 
2. On that time web dev mean only HTML and CSS --> Cause its eassy to learn every is saying they know web dev and C++ will 
be hard for them like --> 

**C++ syntax**

            #include <iostreame>
            using namespace std; 

            int main(){
                cout<<"Hello World"; 
            }
        
        **This is the syntax for printing "hello world" if you forget any thing it will give error (; also)**


**JavaScript syntax**

            console.log("hello world")
        
        **This this is the js syntax and its easy and if you forget ";" it will not give error**


3. Security Limitations 
Lets assume that we have the C++ insted of js then C++ give us low level system control like it can access you files 
edit , read and write ....

**C++ syntax** 

        #include <fstream>
        std::ofstream file("C:\\Users\\rohit\\secrets.txt");
        file << "stolen data";

        --> Without sandboxing, this code could read/write/delete any file on your machine.
        --> In a sandboxed environment, you’d have to intercept all file I/O calls and either block them or restrict them to a   safe “virtual” file system.

**C++ syntax** 

        #include <cstdlib>
        system("rm -rf /");   // Linux
        system("format C:");  // Windows 95 nightmare

        --> this can delete your os..


**C++ syntax** 

        int* p = (int*)0xB8000;  // Access video memory
        *p = 42;

        --> Through pointer it can take direct access of your data 


4. System Configurate was very less like 4-8mb ram, 200-400mb hard disk.

### So the conclusion is --> 
1. We want a easy to learn lang. 
2. Have a good security(like it can only have access of HTML ,CSS and mouse , keyboard) we just limit the access. 
3. Light weight lang. 
4. Autometic clean the garbage. 

** That's why we get the need of javaScript.. ** 

## Every lang need compiler to run there code so does our browser do have compiler? 
Browser like **Chrome** have V8 Engine to run code. Every browser have there own differt Engine. 

**Input --> V8 engine --> output** 
what is V8 Engine ? > its a C++ code --> C++ code ? then browser has compiler ? > no browser dont have compiler -->
then how c++ code is getting run ? --> c++ code --> compile --> machine code --> output. 
**so browser has machine code**

Js --> interpreter 
An interpreter is a program that reads your code and executes it step-by-step, immediately, without producing a separate machine-code file.

Human code → Interpreter → CPU (directly, step by step)




