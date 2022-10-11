import api from '../utils/http-common';

class BookService {
  async getBooks() {
    return await api.get('/books').then((response) => {
      let data = response.data.bookData;
      return data;
    });
  }

  async getBook(id) {
    let options = {
      url: `/books/book?id=${id}`,
    };
    console.log({ options });
    return await api
      .get(`/books/book?id=${id}`)
      .then((response) => {
        console.log(response);
        let data = response.data;
        return data;
      })
      .catch((e) => {
        console.log({ e });
      });
  }
  async getBookByName(name) {
    let options = {
      url: '/books',
      query: name,
    };
    return await api.get(options).then((response) => {
      console.log(response);
      let data = response.data.bookData;
      return data;
    });
  }
}

export default new BookService();
