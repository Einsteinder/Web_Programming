module.exports = {
    printTriangle: function(num){
        if (num < 1||typeof(num)!=="number"){
            throw "Please input number bigger or equal than 1."
        }
        if (num === 1){
            console.log("/\\")
        }
        if (num > 1){
            var firstLineSpace = ""
            let n = 0
            while(n < num){
                firstLineSpace += " "
                n +=1
            } 
            console.log(firstLineSpace + "/\\")
        
        let m = 1
        //Increase vertically
        let middleSpace = ""
        while(m <num){
            var otherLineSpace = firstLineSpace.slice(0,num-1)
            var otherLineTriagleBottom = ""
            let n = 0
            
            //Increase horizantally
            while(n < m){
                otherLineSpace = otherLineSpace.slice(0,num-n-1)
                otherLineTriagleBottom += "--"
                n += 1
               
            }
            middleSpace += "  "
            
            if(m===num-1){
                console.log(otherLineSpace +"/"+ otherLineTriagleBottom +"\\" )
            }else{
                console.log(otherLineSpace + "/"+ middleSpace +"\\" )
    
            }
            m += 1
            
            
    
        }
        otherLineTriagleBottom += "--"
       
    }
    
    },
    
    printSquare: function(num){
        if(num < 2|| typeof(num)!=="number"){
            throw "Please input a number bigger or equal than 2."
        }
        let n = 0
        let m = 0
        let k = 0
        let side = ""
        let topSide = ""
        if (num === 2){
            console.log("|--|")
            console.log("|--|")
        }else{
            while(n<num){
                topSide += "-"
                n ++
            }
            console.log("|"+topSide + "|")
            
            while(m < num){
                side += " "
                m++
            }
            while(k<num-2){
                console.log("|" + side + "|")
                k++
            }
            console.log("|" + topSide + "|")
        }
    
    
    
    },
 
    printRhombus: function(num){
        if(num%2!==0||typeof(num)!=="number"||num < 2){
            throw "Please input even number bigger or equal than 2."
        }
        let spaceLine = ""
        let n = 0
        let m = 1
        let k = 1
        let lineNum = num/2
    
        if( lineNum === 1){
            console.log("/-\\")
            console.log("\\-/")
        }else{
            while(n<lineNum*2){
                spaceLine += " "
                n++
            }
            console.log(spaceLine.slice(0,lineNum-1)+"/-\\")
            while(m<lineNum){
                console.log(spaceLine.slice(0,lineNum-m-1) + "/" + spaceLine.slice(0,2*m+1)+"\\")
                m++
            }
            while(k<lineNum){
                console.log(spaceLine.slice(0,k-1) + "\\" + spaceLine.slice(0,lineNum*2-2*k+1)+"/")
                k++
            }
            console.log(spaceLine.slice(0,lineNum-1)+"\\-/")
        }    
    
    }
}