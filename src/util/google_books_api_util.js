import { secretAPIKey } from './secretAPIKey';

export const googleBooksAPIUtil = query => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${secretAPIKey}`)
              .then(res => res.json())
              .then(({items}) => {
                return items.map(({ volumeInfo }) => ({
                    authors: volumeInfo.authors,
                    title: volumeInfo.title, 
                    publisher: volumeInfo.publisher, 
                    thumbnail: volumeInfo.imageLinks.thumbnail, 
                    infoLink: volumeInfo.infoLink 
                  })
                )
              })
  // return results.items.map(({ volumeInfo }) => { 
  //   { volumeInfo.authors, 
  //     volumeInfo.title, 
  //     volumeInfo.publisher, 
  //     volumeInfo.imageLinks.thumbnail, 
  //     volumeInfo.infoLink 
  //   }
  // })
}