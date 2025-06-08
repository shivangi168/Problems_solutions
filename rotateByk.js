const arr = [1,2,3,4,5,6,7] , k=2;
console.log(rotateByK(arr,k,"right"));
console.log(rotateByK(arr,k,"left"));
function rotateByK(nums, k,dir){
        const n = nums.length;

     k = k%n;
    
    if(dir=="left"){
         reverseArr(nums ,0, k-1);
        reverseArr(nums , k,n-1);
        reverseArr(nums,0, n-1);
       
    }
    else if(dir == "right"){
       reverseArr(nums , n-k,n-1);
        reverseArr(nums , 0,n-k-1);
        reverseArr(nums,0, n-1);
        
    }
    return nums;
    
}
function reverseArr(nums , start,end){
    while(start < end){
         [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
        
    }
}