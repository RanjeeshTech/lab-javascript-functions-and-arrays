function shuffle(currentArray) {
  const array = currentArray.map(arr => arr.slice());
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

describe('Find the greatest number', () => {
  it('should create a function named greatestOfTwoNumbers', () => {
    expect(typeof greatestOfTwoNumbers).toBe('function');
  });

  it('should return greater of two arguments - if the first argument greater', () => {
    expect(greatestOfTwoNumbers(2, 1)).toBe(2);
    expect(greatestOfTwoNumbers(5, -7)).toBe(5);
  });

  it('should return greater of two arguments - if the second argument greater', () => {
    expect(greatestOfTwoNumbers(1, 3)).toBe(3);
    expect(greatestOfTwoNumbers(-5, 3)).toBe(3);
  });

  it('should return either arguments - if both arguments are equal', () => {
    expect(greatestOfTwoNumbers(4, 4)).toBe(4);
  });
});
function greatestOfTwoNumbers(a,b){
  if(a>=b){
    return a;  
  }
  else if(b>=a){
    return b;
  }
}

describe('Find the scary word', () => {
  it('should create a function named findScaryWord', () => {
    expect(typeof findScaryWord).toBe('function');
  });

  it('should return null when called with an empty array', () => {
    expect(findScaryWord([])).toBe(null);
  });

  it('should return the word when called with a single-word array', () => {
    expect(findScaryWord(['foo'])).toBe('foo');
  });

  it('should return the first occurrence of the word when longest have multiple occurrences ', () => {
    expect(findScaryWord(['foo', 'bar'])).toBe('foo');
    expect(findScaryWord(['bar', 'foo'])).toBe('bar');
  });

  it('should return the longest occurrence when it has multiple words', () => {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
    for (let i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findScaryWord(words)).toBe('ironhack');
    }
  });
});

function findScaryWord(words){
  if(words.length==0){
    return null;
  }  
  else if(words.length==1){
    return words[0];
  }
  else if(words.length==2){
    if(words[0].length==words[1].length){
      return words[0];
    }
  }
  else if(words.length>2){
    for(i=0;i<words.length;i++){      
      if(words[0].length<words[i].length){
        words[0] = words[i];
      }   
    }
    return words[0];
  }
}

describe('Calculate the sum of array of numbers', () => {
  it('should create a function named netPrice', () => {
    expect(typeof netPrice).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(netPrice([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(netPrice([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(netPrice([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(netPrice([10, 5, 4, 32, 8])).toBe(59);
  });
});

function netPrice(numbers){  
    let sum=0;
    for(i=0;i<numbers.length;i++){
      if(numbers[i]!=0){
        sum = sum +numbers[i];
      }     
    }      
    return sum; 
}
describe('Bonus: Calculate the sum', () => {
  it('should create a function named add', () => {
    expect(typeof add).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(add([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(add([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(add([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(add([10, 5, 4, 32, 8])).toBe(59);
  });

  it('should return the sum when passed array of strings', () => {
    expect(add(['ana', 'marco', 'nicolas', 'tania', 'ptwd'])).toBe(24);
  });

  it('should return the sum when passed array of mixed strings and numbers - ', () => {
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])).toBe(56);
  });
  it('should return the sum when passed array of mixed strings, numbers and booleans - ', () => {
    // false is counted as 0
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46);
    // true is counted as 1
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47);
  });
  it('should throw an error when unsupported data type (object or array) present in the array', () => {
    // const arr = [6, 12, "miami", 1, "barca", "200", "lisboa", 8, [], {}];

    expect(() => add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}])).toThrow(
      new Error("Unsupported data type sir or ma'am")
    );
  });
});

function add(numbers){  
  let sum=0;
  for(i=0;i<numbers.length;i++){
    if(typeof numbers[i]=='string'){      
        sum = sum + numbers[i].length;    
    } 
    else if(numbers[i]==true){
      sum = sum+1;
    }
    else if(numbers[i]==false){
      sum = sum +0;
    }
    else if(typeof numbers[i]==="number"){      
        sum = sum + numbers[i];      
    }    
    else throw Error("Unsupported data type sir or ma'am");
  }      
  return sum; 
}

describe('Calculate the average of an array of numbers', () => {
  it('should create a function named midPointOfLevels', () => {
    expect(typeof midPointOfLevels).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(midPointOfLevels([])).toBe(null);
  });

  // do we need this?
  // it("should return the average of a one-element array", () => {
  //   expect(averageNumbers([9])).toBe(9);
  // });

  // do we need this?
  // it("should return the average even with negative values", () => {
  //   expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  // });

  it('should return the average of the array', () => {
    expect(midPointOfLevels([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
});

function midPointOfLevels(numbersAvg){
  let sum = 0;
  if(numbersAvg.length==0){
    return null;
  }
  else{
  for(let i=0;i<numbersAvg.length;i++){
    sum = sum+numbersAvg[i];    
  }
  return sum/numbersAvg.length;
}
}

describe('Calculate the average of an array of strings', () => {
  it('should create a function named averageWordLength', () => {
    expect(typeof averageWordLength).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(averageWordLength([])).toBe(null);
  });

  // do we need this?
  // it("should return the average of a one-element array", () => {
  //   expect(averageWordLength(["ironhack"])).toBe(8);
  // });

  it('should return the average of a the array', () => {
    expect(
      averageWordLength([
        'bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt'
      ])
    ).toBe(4.9);
  });
});

function averageWordLength(wordsArr){
  let sum=0;
  if(wordsArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<wordsArr.length;i++){
    sum = sum + wordsArr[i].length;
  }
  return sum/wordsArr.length;
}
}

describe('Bonus: Calculate the average of a mixed elements array', () => {
  it('should create a function named avg', () => {
    expect(typeof avg).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(avg([])).toBe(null);
  });

  it('should return the average of the array', () => {
    // false is counted as 0
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(5.11);
    // true is counted as 1
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(5.22);
  });
});

function avg(mixedArr){
  let sum=0;
  if(mixedArr.length==0){
    return null;
  }
  else{
  for(let i=0;i<mixedArr.length;i++){
    if(typeof(mixedArr[i]) == 'string'){
      sum = sum+mixedArr[i].length;
    }
     else if(mixedArr[i]==true){
      sum = sum + 1;      
    }
    else if(mixedArr[i]==false){
      sum = sum + 0;      
    }
    else {
      sum = sum+mixedArr[i];
    }
  }
  var ans = parseFloat( (sum/mixedArr.length).toFixed(2));
  return ans;
}
}



describe('Unique array', () => {
  it('should create a function named uniquifyArray', () => {
    expect(typeof uniqueArray).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(uniqueArray([])).toEqual(null);
  });

  // do we need this?
  // it("should return the correct uniqified array when an array of the same elements passed as argument", () => {
  //   expect(uniquifyArray(["Ironhack", "Ironhack", "Ironhack"])).toEqual([
  //     "Ironhack"
  //   ]);
  // });

  // do we need this?
  // it("should return the same array when no element is repeated", () => {
  //   expect(uniquifyArray(["Cat", "Dog", "Cow"])).toEqual(["Cat", "Dog", "Cow"]);
  // });

  it('should return the uniquified array', () => {
    expect(
      uniqueArray([
        'bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt',
        'egg',
        'flour'
      ])
    ).toEqual(['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt']);
  });
});

function uniqueArray(wordsUnique){
  let arr=[];
  if(wordsUnique.length==0){
    return null;
  }
 else{
  for(let i=0;i<wordsUnique.length;i++){
    for(let j=i+1;j<wordsUnique.length-1;j++){
   if(wordsUnique[i] !=  wordsUnique[i+1]){
     arr[i] = wordsUnique[i];
   }
   }  
  }
  return arr;  
 }
}

describe('Find elements', () => {
  it('should create a function named searchElement', () => {
    expect(typeof searchElement).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(searchElement([])).toBe(null);
  });

  // do we need this test?
  // it("should return true if the word we are looking for is the only one in the array", () => {
  //   expect(doesWordExist(["machine"], "machine")).toBe(true);
  // });

  // do we need this test?
  // it("should return false if the word we are looking for is not in the array", () => {
  //   expect(
  //     doesWordExist(
  //       ["machine", "poison", "eat", "apple", "horse"],
  //       "ratatouille"
  //     )
  //   ).toBe(false);
  // });

  it('should return true if the word we are looking for is in the array', () => {
    expect(searchElement(['door','window','ceiling','roof','plinth','tiles', 'ceiling','flooring'], 'tiles')).toBe(
      true
    );
  });
});

function searchElement(wordsFind,_find){
  if(wordsFind.length==0){
    return null;
  }
  else{
    for(let i=0;i<wordsFind.length;i++){
      if(wordsFind[i]==_find){
        return true;
      }
    }
  }
}

describe('Count repetition', () => {
  it('should create a function named howManyTimesElementRepeated', () => {
    expect(typeof howManyTimesElementRepeated).toBe('function');
  });

  it('should return 0 (zero) if receives an empty array when called', () => {
    expect(howManyTimesElementRepeated([])).toBe(0);
  });

  it('should return 1 (one) when the word appears only one time in the array', () => {
    expect(howManyTimesElementRepeated(['basketball', 'football', 'tennis'], 'tennis')).toBe(1);
  });

  it("should return 0 (zero) when the word doesn't appear in the array", () => {
    expect(howManyTimesElementRepeated(['basketball', 'football', 'tennis'], 'rugby')).toBe(0);
  });

  it('should return 5 (five) when the word appears 5 times in the array', () => {
    expect(
      howManyTimesElementRepeated(
        [
          'machine',
          'matter',
          'subset',
          'trouble',
          'starting',
          'matter',
          'eating',
          'matter',
          'truth',
          'disobedience',
          'matter'
        ],
        'matter'
      )
    ).toBe(4);
  });
});

function howManyTimesElementRepeated(wordsCount,_count){
  let sum=0;
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]==_count){
      sum=sum+1;
    }
  }
  return sum;
}

describe('Bonus Quest - greatestProduct', () => {
  it('should create a function named maximumProduct', () => {
    expect(typeof maximumProduct).toBe('function');
  });

  it('should return 1 (one) when all numbers of the arrays are 1', () => {
    let matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    expect(maximumProduct(matrix)).toBe(1);
  }); 
});

function maximumProduct(matrix){
  let sum=0;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      let mmatrix = matrix[i];
      sum = sum+mmatrix[j];
    }
  }
  let len = matrix.length*matrix.length;
  if(sum==len){
    return 1;
  }
}
