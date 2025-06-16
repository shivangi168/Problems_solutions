
const nums = [3,1,-2,-5,2,-4];
console.log(rearrangeArray(nums));
    function rearrangeArray(nums) {
        const n = nums.length;
        const positive = [];
        const negative = [];
       

        for(let i=0;i<n;i++){
            if(nums[i] > 0){
                positive.push(nums[i]);
            }
            else{
                negative.push(nums[i]);
            }
        }
        let posIdx = 0 , negativeIdx =0;

        for( let j =0;j<n;j++){
            if(j%2 == 0){
                nums[j] =positive[posIdx];
                posIdx++;

            }
            else{
                nums[j] = negative[negativeIdx];
                negativeIdx++;
            }
        }

      
        return nums;
        
    
}