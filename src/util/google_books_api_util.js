const PREVIEW_IMAGE = 'https://books.google.com/books/content?id=8nXLwSG2O8AC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7134GoVrTK0LrRho1N0mRgQpM5rzKdXsLn3-htNDnUQ1LxiidRdQiAdsKdKgTYaGC3zQOFTAggWT28neaqF5RDOT135r0GcEe4W2Sp1ZLUYf0GMUhd77QIz9T6wIwcVuUeIcSuD';

export const googleBooksAPIUtil = (query, maxResults, familyFriendly) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?` +
                `q=${ query }&` +
                `maxResults=${ maxResults }&` +
                `maxAllowedMaturityRating=${ familyFriendly ? "not-mature" : "mature" }&` +
                `key=${ process.env.REACT_APP_SECRET_CODE }`
              )
              .then(res => res.json())
              .then(({items}) => {
                  return items && items.map(({ volumeInfo }) => ({
                      authors: fillMissingData('Author', volumeInfo.authors),
                      title: fillMissingData('Title', volumeInfo.title), 
                      publisher: fillMissingData('Publisher', volumeInfo.publisher), 
                      thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : PREVIEW_IMAGE, 
                      infoLink: fillMissingData('Link', volumeInfo.infoLink)
                    })
                  )
              })
}

function fillMissingData(field, value) {
  return value === undefined ? value = `${field} information unavailable` : value;
}