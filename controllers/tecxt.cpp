#include<iostream>
using namespace std;
int main(){
    int even=0;
    int odd=0;
for(int i=0;i<=9;i++){
    for(int j=i+1;j<9;j++){
        if(i%2==0 && j%2==0){
            even++;
        }
        else odd++;

    }
}
cout<<even;
cout<<odd;
}