function BankAccount(ac,n,ty,bl){
    this.account=ac;
    this.name=n;
    this.type=ty;
    this.blance=bl ||0;
}
function deposit(bl){
    this.blance+=bl
}
function withdrow(bl){
    if(this.blance<bl){
        alert("unspent balance")
    }
    else{
        this.blance-=bl
    }
}
function checkBalance(){
    console.log(this.blance)
}
function isActive(){
    if(this.blance<1000){
        console.log("Account not acitve")
    }
    else{
        console.log("Account acitve")
    }
}
let p1=new BankAccount(543701,"Mahipal","Saving",300000)
console.log(p1)
deposit.call(p1,50000)
console.log(p1)
withdrow.call(p1,3)
console.log(p1)
blance=checkBalance.apply(p1)
active=isActive.apply(p1)