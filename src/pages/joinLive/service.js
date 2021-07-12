//网络请求
import axios from 'axios';
import { initClassDetail } from './model';

export const getClassDetail = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://qapass.test.com/handler/ucenter?action=checkip&data=' +
          data,
        { withCredentials: true }
      )
      .then(function (response) {
        const data = response.data.Data;
        console.log('server res=', data);
        // dispatch(initClassDetail(data.Ip));
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
