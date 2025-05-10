function flattenArrayIterative(arr) {
    const stack = [...arr];
    const result = [];
  
    while (stack.length > 0) {
      const current = stack.pop();
  
      if (Array.isArray(current)) {
        stack.push(...current);
      } else {
        result.push(current);
      }
    }
  
    return result.reverse(); 
  }
  