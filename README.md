# Find-A-Book

<p align=center>
    <img src='https://user-images.githubusercontent.com/43548466/60144651-35ca1900-9791-11e9-9f01-a82474208e30.gif' style="width:60vw;"/>
</p>

Visit [Find-A-Book](https://find-a-book.herokuapp.com/)!

## About Find-A-Book
Find-A-Book is the latest and greatest web-app for researching books. Using Find-A-Book's search bar, users can find books by author or by title. Search by author to see if there are any new releases or hidden gems by your favorite authors. Search by title to find more info on a book you may have heard of recently.

## Technologies
Find-A-Book is hosted on Heroku and was built with React (specifically using the incredible [create-react-app](https://github.com/facebook/create-react-app)), HTML, and CSS. Tests for Find-A-Book were written using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

Find-A-Book communicates with the [Google Books](https://developers.google.com/books/) repository via the Google Books API.

## Features

### Dynamic API Calling Based on User Input
```javascript
// src/util/googleBooksAPIUtil.js
  return fetch(`https://www.googleapis.com/books/v1/volumes?` +
                `q=${ query }&` +
                `maxResults=${ maxResults }&` +
                `maxAllowedMaturityRating=${ familyFriendly ? "not-mature" : "mature" }&` +
                `orderBy=relevance&` +
                `key=${ process.env.REACT_APP_SECRET_CODE }`
              )
}
```
Find-A-Book passes user inputs from React component state into the url string, customizing the search query to match a user's request. If the default 10 results is not enough, searchers can select to receive up to 40! The HTTP get request is fired off using the Fetch API, returning a thenable Promise.

Also! The API Key for this project is stored as a config variable on Heroku to prevent exposing the private API key online. This variable is accessible via process.env.

### Mock API calls for Async Testing with Enzyme & Jest

```javascript
//src/components/FilterableBookTable/FilterableBookTable.test.js
jest.mock('../../util/googleBooksAPIUtil.js');
// ...
  it('updates "books" state when a valid search query is submitted', async() => {
    let wrapper = mount(<FilterableBookTable />);
    wrapper.setState({query: 'Harry Potter'});
    await wrapper.instance().handleSubmit({preventDefault: () => {}});
    expect(wrapper.state('books').length).toEqual(2);
  })
```
Using Jest's [Manual Mocks](https://jestjs.io/docs/en/manual-mocks), Find-A-Book's test suite prevents making direct Google Books API calls during testing, substituting a local imitation instead. 

Additionally important is this test's use of async/await, key to testing the results of asynchronous calls!

## Project MVPs

- Type in a query and use the Google Books API to display a list of books matching that query.
- Each item in the list should include:
    - book's author
    - title
    - publishing company
    - picture of the book
- From each list item, user's should also be able to navigate to more information about the book.

## Future Directions
- Increase the number of form options, empowering users to further customize their results 
- Increase the number of results beyond 40 
    - the current Google Books API limit is 40, but larger numbers could be achieved by joining the results of multiple API calls

## To Run Locally

Download and unzip the project repository, or git clone from the command line.

### Available Scripts

In the project directory, you can run:

#### `REACT_APP_SECRET_CODE={your-google-api-key} npm start`
**IMPORTANT**: To run this app locally, you will need to provide **your own** Google Books API key. To get your own key, visit the [Google Books Guide](https://developers.google.com/books/docs/v1/using#auth) and follow their directions by registering your app in the [Google Developers Console](https://console.developers.google.com/apis/dashboard) (requires a Google account). Once you have your code, replace '{your-google-api-key}' with the actual API key. Feel free to reach out if you have any questions!

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
