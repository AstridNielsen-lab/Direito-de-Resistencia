/**
 * Smoothly scrolls to an element with the given ID
 * 
 * @param id - The ID of the element to scroll to
 * @param offset - Optional offset from the top, default is 80px (for header height)
 */
export const scrollToElement = (id: string, offset: number = 80): void => {
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};