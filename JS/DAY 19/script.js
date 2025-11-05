// Date: 2-11-2005, Time: 09:50

const prompt = require('prompt-sync')();

// Search in rotated array -->
let nums = [4,5,6,7,0,1,2];
let target = 10;
let first = 0;
    let last = nums.length-1;
    while(first <= last)
    {
        let mid = Math.floor((first + last)/2);
       if(target === nums[mid]) return mid;
       if(nums[first]<=nums[mid])
       {
            if(target >= nums[first] && target <= nums[mid]) last = mid;
            else first = mid+1;
       }
       else{
                if(target >= nums[mid+1] && target <= nums[last]) first = mid+1;
                else last = mid;
       }
       
    }
    
    console.log(-1);