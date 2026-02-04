#include<iostream>
using namespace std;


// sum of n 

double sumn(double n){
    double sum = 1;
    for(double i = 1; i<=n; i++){
        sum*=i;
   
    }
    return sum;

    
}
int main(){
    cout << sumn(5)<< endl;

}
