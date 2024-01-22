let string = 'string'
    let number = 1
    let boolean = true
    let undefinedValue = undefined
    let bigint = 1_000_000_000_000_000_000n
    let nullValue = null
    let object = {}

    function checkVarType(value) {
      if (typeof value === 'string') {
        console.log('Тип - строка')
      } else if (typeof value === 'number') {
        console.log('Тип - число')
      } else if (typeof value === 'boolean') {
        console.log('Тип - условный')
      } else if (typeof value === 'undefined') {
        console.log('Тип - undefined')
      } else if (typeof value === 'bigint') {
        console.log('Тип - большое целочисленное')
      } else if (typeof value === 'object') {
        console.log('Тип - object (может быть null значение)')
      } else {
        console.log('Неизвестный тип какой-то')
      }
    }

    checkVarType(string)
    checkVarType(number)
    checkVarType(boolean)
    checkVarType(bigint)
    checkVarType(undefinedValue)
    checkVarType(nullValue)
    checkVarType(object)