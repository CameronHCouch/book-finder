import { secretAPIKey } from './secretAPIKey';

export const googleBooksAPIUtil = (query, maxResults, familyFriendly) => {
  console.log(query, familyFriendly, familyFriendly ? "not-mature" : "mature" );
  return fetch(`https://www.googleapis.com/books/v1/volumes?` +
                `q=${query}&` +
                `maxResults=${maxResults}&` +
                `maxAllowedMaturityRating=${familyFriendly ? "not-mature" : "mature"}&` +
                `key=${secretAPIKey}`
              )
              .then(res => res.json())
              .then(({items}) => {
                  return items && items.map(({ volumeInfo }) => ({
                      authors: fillMissingData('Author', volumeInfo.authors),
                      title: fillMissingData('Title', volumeInfo.title), 
                      publisher: fillMissingData('Publisher', volumeInfo.publisher), 
                      thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'Preview Image', 
                      infoLink: fillMissingData('Link', volumeInfo.infoLink)
                    })
                  )
              })
}

function fillMissingData(field, value) {
  return value === undefined ? value = `${field} information unavailable` : value;
}