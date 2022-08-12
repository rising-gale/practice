function isPow(value) {
    let res = 0;
    let n = 1;
    while (res < value) {
      if (value == 1 << n) {
        return true;
      } else {
        res = 1 << n;
        n++;
      }
    }
    return false;
  }