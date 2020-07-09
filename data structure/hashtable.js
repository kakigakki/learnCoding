function Hashtable() {
  this.storage = []
  this.limit = 7
  this.count = 0

  //用霍纳法则算出哈希值.一般字符的哈希值为n*37^n:如97的hash值为9*37^2+7*37^2
  //再利用hash值模当前数组的长度来获取下标
  Hashtable.prototype.hashFunc = function(str, size) {
    let hashcode = 0
    for (let i = 0; i < str.length; i++) {
      hashcode = hashcode * 37 + str.codePointAt(i)
    }
    //算出元素在哈希表中下标
    let index = hashcode % size
    return index
  }

  Hashtable.prototype.put = function(k, v) {
    let index = this.hashFunc(k, this.limit)
    let bucket = this.storage[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][k]) {
          bucket[i][k] = v
          return
        }
      }
      bucket.push({
        [k]: v
      })
    } else {
      bucket = [{
        [k]: v
      }]
      this.storage[index] = bucket
    }
    this.count++
      //如果扩容因子小于0.25时,进行缩容
      if (this.count / this.limit >= 0.75) this.resize(this.recentPrime(this.limit * 2))
  }

  Hashtable.prototype.get = function(k) {
    let index = this.hashFunc(k, this.limit)
    let bucket = this.storage[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][k]) {
          return bucket[i][k]
        }
      }
    }
    return -1
  }

  Hashtable.prototype.remove = function(key) {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key]) {
          let removed = bucket.splice(i, 1)[0]
          this.count--
            //如果扩容因子小于0.25时,进行缩容
            if (this.count / this.limit < 0.25) this.resize(this.recentPrime(Math.floor(this.limit / 2)))
          return removed
        }
      }
    }
    return null
  }

  Hashtable.prototype.size = function() {
    return this.count
  }

  Hashtable.prototype.empty = function() {
    return this.count ? false : true
  }

  //扩容/减容
  Hashtable.prototype.resize = function(newLimit) {
    this.limit = newLimit
    let oldStorage = this.storage
    this.storage = []
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i]) {
        let bucket = oldStorage[i]
        for (let j = 0; j < bucket.length; j++) {
          let key = Object.keys(bucket[j])[0]
          let index = this.hashFunc(key, this.limit)
          this.put(key, bucket[j][key])
        }
      }
    }
  }

  //判断一个数是不是质数
  Hashtable.prototype.isPrime = function(num) {
    let temp = Math.floor(Math.sqrt(num))
      //当一个数不能被2到它的平方根的数整除时,这个数就是质数了
    for (let i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }

  //获取一个数最近的质数,用于哈希表扩容
  Hashtable.prototype.recentPrime = function(num) {
    while (true) {
      if (this.isPrime(num)) return num
      num++
    }
  }
  Hashtable.prototype.toString = function() {
    return this.storage
  }
}

let hashtable = new Hashtable()
hashtable.put("assd", 5);
hashtable.put("asasd", 1);
hashtable.put("awssd", 4);
console.log(hashtable.get("assd"));
console.log(hashtable.remove("assd"));
console.log(hashtable.remove("awssd"));
hashtable.put("d", 4);
hashtable.put("dd", 4);
hashtable.put("ds", 4);
hashtable.put("da", 4);
console.log(hashtable.toString());