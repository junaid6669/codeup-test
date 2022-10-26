import axios from "axios";

const URL = "https://62d7f6869088313935880018.mockapi.io/api/v1/";

class CatalogueAPI {
  async getCall(endpoint: string, params: any) {
    let data: any = [];
    await axios
      .get(`${URL}/${endpoint}`, {
        params: {
          ...params,
        },
      })
      .then((res) => {
        data = res.data;
      });
    return Promise.resolve(data);
  }
}

export const catalogueApi = new CatalogueAPI();
