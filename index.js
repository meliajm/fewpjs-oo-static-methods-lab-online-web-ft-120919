class Formatter {
  static capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str) {
    // capitalize first letter
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    str = this.capitalize(str)
    // go through each word
    let strArray = str.split(' ')
    // console.log(strArray)
    const title = []
    // strArray.map(word => word.toUpperCase())
    for (let i=0; i<strArray.length; i++) {
      if (exceptions.includes(strArray[i])) {
        title.push(strArray[i])
      } else {
        title.push(this.capitalize(strArray[i]))
      }
    }
    // if word is not on except list
    // then capitize letter
    // return titleized string
    // title.join(' ')
    // console.log(title.join(' '))
    return title.join(' ')

  }
}