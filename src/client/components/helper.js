
/**
 * @function debounce
 * @description Limits the function call based on given delay
*/

export const debounce = (func, delay) => {
  let timer
  return function (...args) {
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

/**
 * @function getLanguage
 * @description Gives the list of language as string with comma separated
*/

export const getLanguage = (languages) => {
  const langList = []
  if (Array.isArray(languages)) {
    languages.forEach((language) => {
      if (language.key) {
        langList.push(language.key.split('/')[2].toUpperCase())
      }
    })
  }
  return langList.join(',')
}