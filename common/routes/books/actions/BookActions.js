export function createBook(title) {
  return {
    type: 'CREATE_BOOK',
    title,
    date: Date.now()
  }
}
