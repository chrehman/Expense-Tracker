const TransactionReducer=(state,action)=>{
    switch (action.type) {
        case "Add Transaction":{
            return [action.payload,...state]    
        }
        case "Delete Transaction":{
            // console.log(state.length);
            var arr=[...state];
            // console.log(arr.length); 
            var arr2=[];
            var j=0;
            // console.log("Welcome");
            for(var i=0;i<arr.length;i++){
                console.log("array id"+arr[j].id);
                
                if(action.id===arr[i].id){
                    
                    console.log("matched"+action.id);
                }else{
                    arr2[j]=arr[i];
                    j++;
                }    
            } 

            return arr2; 
        }    
    
        default:
            return state;
    }
}


export default TransactionReducer;