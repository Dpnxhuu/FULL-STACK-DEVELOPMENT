#include<iostream>
using namespace std;

int main(){ 

int age ;
cout << "Enter your age : ";
cin >> age;
   
if(age>=18){
cout<< "You can vote move ahead : ";

} else if(age<=15 && age>=7){
    
    cout<<"You are a child u can't vote min age reqment is 18";
    
} else {cout <<"You can't vote, your age is under 17 :"; }

}  