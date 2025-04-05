/**
 * debounce - Limits how often a function can run.
 * 
 * This method delays the execution of the provided function (`func`)
 * until after a specified wait time (`wait` in ms) has passed
 * since the last time the returned function was called.
 * 
 * Useful for optimizing performance-heavy tasks like API calls
 * during fast events such as typing, resizing, or scrolling.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - Time in milliseconds to wait before executing
 * @returns {Function} - A debounced version of the original function
 */


export default function debounce(func, wait) {
    let timer = null;
  
    return function (...args){
      const context = this;
  
      clearTimeout(timer);
  
      timer = setTimeout(function(){
        timer = null;
        func.apply(context, args);
      }, wait)
    }
  }