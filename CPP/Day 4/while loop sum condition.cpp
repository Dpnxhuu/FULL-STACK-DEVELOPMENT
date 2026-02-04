#include<iostream>
using namespace std;

int main(){

int n = 10;
int count = 1;//iteration
int sum = 0;

while (count<=n){

    if(count%2!=0){


        sum += count;
    }

    count++;
}
cout<< sum;
}
