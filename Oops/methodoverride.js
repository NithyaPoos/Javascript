class Bank{
    roi(){
        return 0;
    }
}
class SBI extends Bank{
    roi(){
        return 10.5;
    }
}
class ICICI extends Bank{
    roi(){
        return 12.5;    
    }
}
s=new SBI();
console.log(s.roi());  //10.5
i=new ICICI();
console.log(i.roi());  //12.5
b=new Bank();
console.log(b.roi());  //0